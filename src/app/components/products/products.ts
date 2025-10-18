import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, ɵEmptyOutletComponent],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  
  ProductsList: IProduct[];
  CategoryList: ICategory[];
  selectedCategoryId: number | null = 0;
  ProductQuantity: string ="";

  constructor() {
    this.ProductsList = [
      { id: 1, name: 'Laptop', description: 'High performance laptop', price: 1500, categoryId: 1, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 10 },
      { id: 2, name: 'Smartphone', description: 'Latest model smartphone', price: 800, categoryId: 1, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 0 },
      { id: 3, name: 'Headphones', description: 'Noise cancelling headphones', price: 200, categoryId: 2, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 20 },
      { id: 4, name: 'Smartwatch', description: 'Feature-rich smartwatch', price: 250, categoryId: 2, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 0 },
      { id: 5, name: 'Tablet', description: 'Lightweight tablet', price: 600, categoryId: 3, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 10 },
      { id: 6, name: 'Ipad', description: 'Lightweight Ipad', price: 6000, categoryId: 3, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 1 }
    ];

    this.CategoryList = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Accessories' },
      { id: 3, name: 'Gadgets' }
    ];
  }

  Productsold(IProduct: IProduct){
    if (IProduct.Quantity > 0) {
      IProduct.Quantity--;
    }
  }
  

}
