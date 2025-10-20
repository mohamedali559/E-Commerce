import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProducts {
  
  ProductsList: IProduct[];
  
  constructor() {
    this.ProductsList = [
      { id: 1, name: 'Laptop', description: 'High performance laptop', price: 1500, categoryId: 1, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 10 },
      { id: 2, name: 'Smartphone', description: 'Latest model smartphone', price: 800, categoryId: 1, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 0 },
      { id: 3, name: 'Headphones', description: 'Noise cancelling headphones', price: 200, categoryId: 2, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 20 },
      { id: 4, name: 'Smartwatch', description: 'Feature-rich smartwatch', price: 250, categoryId: 2, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 0 },
      { id: 5, name: 'Tablet', description: 'Lightweight tablet', price: 600, categoryId: 3, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 10 },
      { id: 6, name: 'Ipad', description: 'Lightweight Ipad', price: 6000, categoryId: 3, imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', Quantity: 1 }
    ];
  }

  getAllProducts(): IProduct[] {
    return this.ProductsList;
  }

  getProductById(id: number): IProduct | null {
    const product = this.ProductsList.find(product => product.id === id);
    return product ? product : null;
  }

  getProductsByCategoryId(categoryId: number): IProduct[] {
    return this.ProductsList.filter(product => product.categoryId == categoryId);

  }

  createProduct(product: IProduct): void {
    this.ProductsList.push(product);
  }

  updateProduct(updatedProduct: IProduct): void {
    const index = this.ProductsList.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.ProductsList[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.ProductsList = this.ProductsList.filter(product => product.id !== id);
  }

}
