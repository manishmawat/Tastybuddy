import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('local-variable-name') is used to get the value in component from the html page.
  // @ViewChild('inputName') nameInputRef: ElementRef;
  // @ViewChild('inputAmount') amountInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  AddItemToShoppingList(name: string, amount: number) {
    this.itemAdded.emit(new Ingredient(name, amount));
  }
}
