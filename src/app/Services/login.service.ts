import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Login } from '../Shared/login';
import { Register } from '../Shared/register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClint:HttpClient) { }

  Login(user:Login):Observable<any>{
    const headerss = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    
    }

 var body = "grant_type=password&username="+ user.username + 
 "&password=" + user.password; 
   return this._httpClint.post<any>("http://localhost:9602/login",body,{headers:headerss})
  
       
  }
  Register(user:Register):Observable<any>{
    const headerss = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
console.log(user.Photo);
   return this._httpClint.post<any>("http://localhost:9602/api/account",user,{headers:headerss})
  
  }
}
