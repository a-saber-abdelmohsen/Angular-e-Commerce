import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MainCategoryService } from 'src/app/Services/main-category.service';
import { SubcategoryService } from 'src/app/Services/subcategory.service';
import { Main_Category } from 'src/app/Shared/Main_Category';
import { SubCategory } from 'src/app/Shared/SubCategory';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.scss']
})
export class EditSubcategoryComponent implements OnInit {

  constructor(private _SubcategoryService:SubcategoryService,private _MaincategoryService:MainCategoryService,private activatedRoute:ActivatedRoute) { }
  subcategory:SubCategory
  subcategories:SubCategory[]=[];
  maincategories:Main_Category[]=[];
  imageUrl: any = "./assets/images/def.png"
  fileToUpload!: File
  id:number
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parms:ParamMap)=>{
      this.id=parseInt(parms.get('id')!);
    });
    this._SubcategoryService.getSubcategoryById(this.id).subscribe((data)=>
    {
      this.subcategory=data
    });
    this._SubcategoryService.getAllSubcategories().subscribe((data)=>
    {
      this.subcategories=data;
      this.subcategories=this.subcategories.filter(item=>item.Id!=this.id);
    });
    this._MaincategoryService.GetAllMain_cat().subscribe(data=>{
      this.maincategories=data
    });
      //this._MaincategoryService.getAllMaincategories()
    //this.maincategories=[new Main_Category(1,"phones",""),new Main_Category(2,"labs","")];
  }
  onSubmit(data:any)
  {
    //alert("submit");
    this.subcategory.imageFile=this.fileToUpload;
    this._SubcategoryService.editSubcategory(this.id,this.subcategory).subscribe(data=>
      {
        console.log(data)
      },error=>
        {
          console.log(error)
        });
  }
  fileHandle(file: any) 
  {
    this.fileToUpload = file.files.item(0)
    var filereader = new FileReader();
    /*filereader.onloadend = (e) => {
      console.log(filereader.result);
      this.filestring = filereader.result as string;
   };*/
    filereader.onload = (event) => {
      this.imageUrl = event.target?.result;
      console.log(this.imageUrl);
    }
    filereader.readAsDataURL(this.fileToUpload)
  }

}
