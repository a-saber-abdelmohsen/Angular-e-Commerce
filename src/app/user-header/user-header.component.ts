import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  userRgisterd: boolean = false
  userName: string;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private cartService: CartService
  ) {
    if (localStorage.getItem("userId") == null) {
      this.userRgisterd = false;
    } else {
      this.userRgisterd = true;
      this.userName = localStorage.getItem("userName")!;
    }
    this.loginService.currentMessage2.subscribe(mess => {
      if (localStorage.getItem("userId") == null) {
        this.userRgisterd = false;
      } else {
        this.userRgisterd = true;
      }
    })
  }

  ngOnInit(): void {
  }
  Logout() {
    if (localStorage.getItem("userId") != null) {
      localStorage.removeItem("access_token")
      localStorage.removeItem("userName")
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      this.loginService.changeMessage('');
      this.router.navigate(['/login']);
      this.cartService.EmptyCart();
    }
  }
}
