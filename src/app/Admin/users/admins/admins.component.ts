import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Shared/User';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {


  Admins: User[]

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._usersService.GetAdmins().subscribe(
      d => this.Admins = d
    );
  }

  DeleteAdmin(id: string){
    this._usersService.DeleteAdmin(id).subscribe(
      d => {
        this.Admins = this.Admins.filter(function(admin){
          return admin.Id != id
        });
        this._usersService.DeleteAdminUpdate.next(id);
      },
      err => {
        
      }
    )
  }

}
