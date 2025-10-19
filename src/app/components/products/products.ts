import { Component, Input, OnChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// removed unused router import

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnChanges {
  
  ProductsList: IProduct[];
  FilteredProducts: IProduct[];
  ProductQuantity: string ="";
  @Input() ReceivedCatigoryId: number= 0;

  constructor() {
    this.ProductsList = [
      { id: 1, name: 'Laptop', description: 'High performance laptop', price: 1500, categoryId: 1, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 10 },
      { id: 2, name: 'Smartphone', description: 'Latest model smartphone', price: 800, categoryId: 1, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 0 },
      { id: 3, name: 'Headphones', description: 'Noise cancelling headphones', price: 200, categoryId: 2, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 20 },
      { id: 4, name: 'Smartwatch', description: 'Feature-rich smartwatch', price: 250, categoryId: 2, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 0 },
      { id: 5, name: 'Tablet', description: 'Lightweight tablet', price: 600, categoryId: 3, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 10 },
      { id: 6, name: 'Ipad', description: 'Lightweight Ipad', price: 6000, categoryId: 3, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 1 }
    ];

    this.FilteredProducts = this.ProductsList;
  }

  ngOnChanges(){
    this.filterProducts();
  }

  Productsold(IProduct: IProduct){
    if (IProduct.Quantity > 0) {
      IProduct.Quantity--;
    }
  }
  filterProducts(){
    if(this.ReceivedCatigoryId == 0){
      this.FilteredProducts = this.ProductsList;
    }
    else{
      this.FilteredProducts = this.ProductsList.filter(p=>p.categoryId == this.ReceivedCatigoryId);
    }
  }
  

}
