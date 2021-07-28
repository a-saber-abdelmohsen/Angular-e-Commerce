import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainCategoryService } from 'src/app/Services/main-category.service';
import { SubcategoryService } from 'src/app/Services/subcategory.service';
import { Main_Category } from 'src/app/Shared/Main_Category';
import { SubCategory } from 'src/app/Shared/SubCategory';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.scss']
})
export class AddSubcategoryComponent implements OnInit {

  constructor(private _SubcategoryService:SubcategoryService,private _MaincategoryService:MainCategoryService) { }
  subcategory:SubCategory=new SubCategory(0,"",0,"","","",0) ;
  subcategories:SubCategory[]=[];
  maincategories:Main_Category[]=[];

  ngOnInit(): void {
    this._SubcategoryService.getAllSubcategories().subscribe((data)=>
    {
      this.subcategories=data;
      //this.subcategories=this.subcategories.filter(item=>item.Id!=Id);
    });
    //this._MaincategoryService.getAllMaincategories()
    this.maincategories=[new Main_Category(1,"phones"),new Main_Category(2,"labs")];
  }

  
  onSubmit(data:any)
  {
    this._SubcategoryService.addSubcategory(this.subcategory);
  }
  

}
