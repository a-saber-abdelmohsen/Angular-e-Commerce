import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
userRgisterd:boolean=false
  constructor(private router:Router) {
    if(localStorage.getItem("userId")==null){
    this.userRgisterd=false;
    }else{
      this.userRgisterd=true;
    }

   }

  ngOnInit(): void {
  }
  Logout(){
    if(localStorage.getItem("userId")!=null){
    localStorage.removeItem("access_token")
    localStorage.removeItem("userName")
    localStorage.removeItem("userId")
    localStorage.removeItem("role")
    this.router.navigate(['/login'])
    }
  }
}
