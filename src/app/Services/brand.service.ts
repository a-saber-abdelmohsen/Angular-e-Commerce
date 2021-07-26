import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../Shared/Brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url:string='http://localhost:9602/api/brand';
  constructor(private _http:HttpClient) { }

GetAllBrand():Observable<Brand[]>
{
  return this._http.get<Brand[]>(this.url);
}

getById(id: any):Observable<Brand[]>
{
  return this._http.get<Brand[]>(`${this.url}/${id}`);
}

DeleteBrand(id: any):Observable<Brand[]>
{
  return this._http.delete<Brand[]>(`${this.url}/${id}`);

}
}


