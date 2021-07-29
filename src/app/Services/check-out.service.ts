import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckOutForm } from '../Shared/CheckOutForm';
import { Order } from '../Shared/Order';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  url:string='http://localhost:9602/api/CheckOut'
  constructor(private _http:HttpClient) { }

  PostOrder(data: CheckOutForm): Observable<any>{
    let formData = new FormData();
    formData.append('Address', data.Address);
    formData.append('Total_Price',data.Total_Price.toString());
    formData.append('payment',data.payment.toString());
    return this._http.post<any>(this.url, formData);
  }


  GetUserOrders(userId: string): Observable<Order[]>{
    return this._http.get<Order[]>(`${this.url}/${userId}`);
  }

 
}
