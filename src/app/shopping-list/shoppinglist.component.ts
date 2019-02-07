import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
    selector: 'app-shoppinglist',
    templateUrl: 'shoppinglist.component.html'
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppinglistService: ShoppingListService) {}
    ngOnInit() {
        this.ingredients = this.shoppinglistService.getIngredient();
        this.shoppinglistService.ingredientChanged
        .subscribe(
            (updatedIngredients: Ingredient[]) => {
                this.ingredients = updatedIngredients;
            }
        );
    }
}
