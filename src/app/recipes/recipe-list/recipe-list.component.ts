import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('First test Recipe', 'This is a sample recipe',
  `https://www.google.com/imgres?
  imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcf%2F
  Veg_Pulao_with_onion_Raitha_02.jpg
  &imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AVeg_Pulao_with_onion_Raitha_02.jpg
  &docid=VOnG0iCNpw8UuM&tbnid=N2_sI71E1RKyGM%3A
  &vet=10ahUKEwi5tbjg0KfgAhVHyYMKHXiPDH4QMwhsKAIwAg..i
  &w=5184&h=3456&hl=en&bih=654
  &biw=1366&q=veg%20recipe
  &ved=0ahUKEwi5tbjg0KfgAhVHyYMKHXiPDH4QMwhsKAIwAg
  &iact=mrc&uact=8`)
];
  constructor() { }

  ngOnInit() {
  }

}
