import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Shared/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Users: User[];

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._usersService.GetUsers().subscribe(
      d => this.Users = d
    )

    this._usersService.DeleteAdminUpdate.subscribe(
      id => {
        this._usersService.GetById(id).subscribe(
          u => {
            this.Users.push(u);
          }
        )
      }
    )
  }

  MakeAdmin(id: string){
    this._usersService.MakeAdmin(id).subscribe(
      d => {
        this.Users = this.Users.filter(
          function(user){
            return user.Id != id;
          }
        )
      },
      err => {

      }
    )
  }




}
