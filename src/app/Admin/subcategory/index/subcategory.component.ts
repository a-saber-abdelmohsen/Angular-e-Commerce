import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubcategoryService } from 'src/app/Services/subcategory.service';
import { SubCategory } from 'src/app/Shared/SubCategory';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  
  subcategories:SubCategory[]=[]
  constructor(private _SubcategoryService:SubcategoryService, private router:Router) { }
  

  ngOnInit(): void {
   this._SubcategoryService.getAllSubcategories().subscribe((data)=>
    {
      this.subcategories=data
    })
  }
  deleteSubcategory(id: any)
  {
    console.warn(id);
  this._SubcategoryService.deleteSubcategory(id).subscribe(data=>{
   this.subcategories=this.subcategories.filter(item=>item.Id !=id);
    console.log(data)

  });
  }

}
