import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('First test Recipe', 'This is a sample recipe',
  `http://coastguard.dodlive.mil/files/2014/06/IMG_7999.jpg`),
  new Recipe('Second test Recipe', 'This is a sample recipe',
  `http://coastguard.dodlive.mil/files/2014/06/IMG_7999.jpg`)
];

@Output() recipeSelectedFromList = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelectedOnList(recipe: Recipe) {
    this.recipeSelectedFromList.emit(recipe);
  }
}
