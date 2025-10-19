import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule, NgModel } from '@angular/forms';
import { Products } from "../products/products";

@Component({
  selector: 'app-order',
  imports: [FormsModule, Products],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {

    CategoryList: ICategory[];
    selectedCategoryId: number= 0;

    constructor() {
     this.CategoryList = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Accessories' },
      { id: 3, name: 'Gadgets' }
    ];
    }

}
