import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Main_Category } from '../Shared/Main_Category';

@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {
  url: string = 'http://localhost:9602/api/Main_Category';
  constructor(private _http: HttpClient) {}

  GetAllMain_cat(): Observable<Main_Category[]> {
    return this._http.get<Main_Category[]>(this.url);
  }

  getById(id: any): Observable<Main_Category[]> {
    return this._http.get<Main_Category[]>(`${this.url}/${id}`);
  }

 /* PostBrand(data: FormBrand): Observable<any>{
    let formData = new FormData();
    formData.append('Name', data.Name);
    formData.append('imageFile', data.imageFile);
    return this._http.post<any>(this.url+"/create", formData);
  }*/

  DeleteMain_cat(id: any): Observable<Main_Category[]> {
    return this._http.delete<Main_Category[]>(`${this.url}/${id}`);
  }
}
