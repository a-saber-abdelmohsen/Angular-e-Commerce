import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { Register } from 'src/app/Shared/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData: Register
  imageUrl: any = "./assets/images/def.png"
  fileToUpload!: File
  errors:string=""
  constructor(private _serviceLogin: LoginService,private router:Router) {

    this.registerData = new Register("", "", "",null, "", "", "", "")
  }

  ngOnInit(): void {

  }
  onSubmit() {
this.registerData.Photo=this.fileToUpload;

    this._serviceLogin.Register(this.registerData).subscribe(data => {
     
      alert(data);
this.router.navigate(['/login']);

      // this.router.navigate(["/homePage"])
    }, error => {this.errors=error.error.error_description});
  }
  fileHandle(file: any) {
    this.fileToUpload = file.files.item(0)

    var filereader = new FileReader();
    filereader.onload = (event) => {
      this.imageUrl = event.target?.result;
     
    }
    filereader.readAsDataURL(this.fileToUpload)
  }
}
