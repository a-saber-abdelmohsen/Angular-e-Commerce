import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckOutForm } from '../Shared/CheckOutForm';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  url:string='http://localhost:9602/api/CheckOut'
  constructor(private _http:HttpClient) { }

  PostOrder(data: CheckOutForm): Observable<any>{
    return this._http.post<any>(this.url, data);
  }
  

 
}
