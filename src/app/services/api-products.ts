import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiProducts {
  constructor(private _httpClient: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(`${environment.BaseURL}ProductsList`);
  }

  getProductById(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${environment.BaseURL}ProductsList/${id}`);
  }

  getProductsByCategoryId(category: number): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(`${environment.BaseURL}ProductsList?categoryId=${category}`);
  }
}