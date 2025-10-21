import { Component, Input, OnChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdCard } from '../../directives/prod-card';
import { StaticProducts } from '../../services/static-products';
import { concatWith } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
// removed unused router import

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProdCard, RouterLink, RouterOutlet],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})


export class Products implements OnChanges {  
  ProductsList: IProduct[];
  FilteredProducts: IProduct[];
  ProductQuantity: string ="";
  @Input() ReceivedCatigoryId: number= 0;

  constructor(private _staticProducts: StaticProducts,
    private _router: Router
  ) {
    this.ProductsList = this._staticProducts.getAllProducts();
    this.FilteredProducts = this.ProductsList;
  }

  ngOnChanges(){
    console.log(this.ReceivedCatigoryId);
    this.FilteredProducts = this._staticProducts.getProductsByCategoryId(this.ReceivedCatigoryId);
  }

  Productsold(IProduct: IProduct){
    if (IProduct.Quantity > 0) {
      IProduct.Quantity--;
    }
  }

  NavigateToDetails(prodId: number){
    this._router.navigateByUrl(`/Products/Details/${prodId}`);
  }
}
