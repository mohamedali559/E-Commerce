import { Component, OnInit } from '@angular/core';
import { ApiProducts } from '../../services/api-products';
import { ApiCategories } from '../../services/api-categories';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-add-product',
  imports: [],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct implements OnInit {

  CategoriesList!: ICategory[];

  constructor(private _apiCategories: ApiCategories) { }

  ngOnInit() {
    this._apiCategories.getAllCategories().subscribe(categories => {
      this.CategoriesList = categories;
    });
  }

}
