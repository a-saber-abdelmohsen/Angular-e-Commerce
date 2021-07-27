import { Component, OnInit } from '@angular/core';
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
  constructor(private _serviceLogin: LoginService) {

    this.registerData = new Register("", "", "",null, "", "", "", "")
  }

  ngOnInit(): void {

  }
  onSubmit() {
this.registerData.Photo=this.fileToUpload;

    this._serviceLogin.Register(this.registerData).subscribe(data => {
      console.log(data)


      // this.router.navigate(["/homePage"])
    }, error => { console.log(error) });
  }
  fileHandle(file: any) {
    this.fileToUpload = file.files.item(0)

    var filereader = new FileReader();
    filereader.onload = (event) => {
      this.imageUrl = event.target?.result;
      console.log(this.imageUrl);
    }
    filereader.readAsDataURL(this.fileToUpload)
  }
}
