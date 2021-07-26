import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../Shared/ProductDetails';
import { Rating2 } from '../Shared/Rating2';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  BaseURL: string = "http://localhost:9602/api/DetailsPage";
  constructor(  private _http: HttpClient) { }
  GetProductDetails(id:number): Observable<ProductDetails>{
    return this._http.get<ProductDetails>(this.BaseURL+"/"+id);
  }
}
