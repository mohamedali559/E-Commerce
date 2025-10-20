import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule, NgModel } from '@angular/forms';
import { Products } from "../products/products";
import { Ssn2datePipe } from '../../pipes/ssn2date-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CommonModule, FormsModule, Products, Ssn2datePipe],
  templateUrl: './order.html',
  styleUrls: ['./order.css'],
  standalone: true
})
export class Order {

    CategoryList: ICategory[];
    selectedCategoryId: number= 0;
    SSN:number=30301141202434;

    constructor() {
     this.CategoryList = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Accessories' },
      { id: 3, name: 'Gadgets' }
    ];
    }

}
