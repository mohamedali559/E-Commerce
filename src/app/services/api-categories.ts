import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../models/icategory';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCategories {
  constructor(private _httpClient: HttpClient) { }

  getAllCategories(): Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>(`${environment.BaseURL}categories`);
  }

}
