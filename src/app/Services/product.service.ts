import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Shared/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BaseURL: string = "http://localhost:9602/api/product";
  constructor(
    private _http: HttpClient
  ) { }


    GetProducts(): Observable<Product[]>{
      return this._http.get<Product[]>(this.BaseURL);
    }
}
