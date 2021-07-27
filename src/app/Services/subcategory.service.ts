import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SubCategory } from '../Shared/SubCategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
 
  constructor(private _http:HttpClient) { }
  url:string="http://localhost:9602/api/SubCategory";
  getAllSubcategories(): Observable<SubCategory[]>{
    return this._http.get<SubCategory[]>(this.url);
  }

  getSubcategoryById(id:any):Observable<SubCategory[]>
{
  return this._http.get<SubCategory[]>(`${this.url}/${id}`);
}
deleteSubcategory(id: any):Observable<SubCategory[]>
{
  return this._http.delete<SubCategory[]>(`${this.url}/${id}`);
}
addSubcategory(_SubCategory: SubCategory):Observable<SubCategory>
{
  return this._http.post<SubCategory>(`${this.url}`,_SubCategory);
}
editSubcategory(id: any,_SubCategory: SubCategory):Observable<SubCategory>
{
  return this._http.put<SubCategory>(`${this.url}/${id}`,_SubCategory);
}


}