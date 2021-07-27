import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainCategoryService } from 'src/app/Services/main-category.service';
import { Main_Category } from 'src/app/Shared/Main_Category';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  main_Cat:Main_Category[]=[];
 
  constructor(private _Main_CatService:MainCategoryService, private router:Router) { }

  ngOnInit(): void {
    this._Main_CatService.GetAllMain_cat().subscribe((data)=>{
      this.main_Cat=data;
      console.log(data);
    })
  }

  deletebrand(id: any)
  {
    console.warn(id);
  this._Main_CatService.DeleteMain_cat(id).subscribe(data=>{
   this.main_Cat=this.main_Cat.filter(item=>item.Id !=id);
    console.log(data)

  });
  }
}
