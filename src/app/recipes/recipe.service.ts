import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    ing = new Ingredient('abc', 10);
    private recipes: Recipe[] = [
        new Recipe('First test Recipe', 'This is a sample recipe',
        `http://coastguard.dodlive.mil/files/2014/06/IMG_7999.jpg`,
        [new Ingredient('Mango', 2),
         new Ingredient('Banana', 3)]),
        new Recipe('Second test Recipe', 'This is an another recipe',
        `http://coastguard.dodlive.mil/files/2014/06/IMG_7999.jpg`,
        [new Ingredient('Nector', 2),
         new Ingredient('Lemon', 3)])
      ];
      getRecipe() {
          console.log(this.recipes);
          return this.recipes.slice();
      }

      constructor(private shoppinglistService: ShoppingListService) {}

      addIngredientToShoppingList(ingredients: Ingredient[]) {
          this.shoppinglistService.addIngredientToShoppingList(ingredients);
      }
}
