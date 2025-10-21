import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { StaticProducts } from '../../services/static-products';



@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {

  Prouduct:IProduct | null = null;

  constructor(private _activatedRoute: ActivatedRoute , private _staticProducts: StaticProducts) {
    
  }

  ngOnInit() {
    // Fetch product details using the product ID from the route
    this._activatedRoute.paramMap.subscribe(params => {
      const productId = params.get('id');

      if (productId) {
        this.Prouduct = this._staticProducts.getProductById((Number(productId)));
      }
    });
  }

}
