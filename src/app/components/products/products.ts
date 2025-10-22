import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdCard } from '../../directives/prod-card';
import { StaticProducts } from '../../services/static-products';
import { concatWith } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ApiProducts } from '../../services/api-products';
// removed unused router import

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProdCard, RouterLink, RouterOutlet],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})


export class Products implements OnChanges, OnInit {
  ProductsList!: IProduct[];
  FilteredProducts!: IProduct[];
  ProductQuantity: string = "";
  @Input() ReceivedCatigoryId: number = 0;

  constructor(private _apiProducts: ApiProducts,
    private _router: Router) { }

  // ===================================================
  ngOnInit() {
    this._apiProducts.getAllProducts().subscribe({
      next: (products) => {
        this.ProductsList = products;
        this.FilteredProducts = products;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  // ===================================================
  ngOnChanges() {
    console.log(this.ReceivedCatigoryId);
    this._apiProducts.getProductsByCategoryId(this.ReceivedCatigoryId).subscribe({
      next: (products) => {
        this.FilteredProducts = products;
      },
      error: (err) => {
        console.error('Error fetching filtered products:', err);
      }
    });
  }
  // ===================================================


  Productsold(IProduct: IProduct) {
    if (IProduct.Quantity > 0) {
      IProduct.Quantity--;
    }
  }

  NavigateToDetails(prodId: number) {
    this._router.navigateByUrl(`/Products/Details/${prodId}`);
  }
}
