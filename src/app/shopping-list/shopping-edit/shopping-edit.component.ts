import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('local-variable-name') is used to get the value in component from the html page.
  // @ViewChild('inputName') nameInputRef: ElementRef;
  // @ViewChild('inputAmount') amountInputRef: ElementRef;
  // @Output() itemAdded = new EventEmitter<Ingredient>();
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  AddItemToShoppingList(name: string, amount: number) {
    // this.itemAdded.emit(new Ingredient(name, amount));
    this.shoppinglistService.addIngredient(new Ingredient(name, amount));
  }
}
