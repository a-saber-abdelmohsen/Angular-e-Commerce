import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../Shared/ProductDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  BaseURL: string = "http://localhost:9602/api/DetailsPage/1";
  constructor(  private _http: HttpClient) { }
  GetProductDetails(): Observable<ProductDetails>{
    return this._http.get<ProductDetails>(this.BaseURL);
  }
}
