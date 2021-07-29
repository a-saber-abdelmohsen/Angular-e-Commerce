import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BrandService } from 'src/app/Services/brand.service';
import { ProductService } from 'src/app/Services/product.service';
import { SubcategoryService } from 'src/app/Services/subcategory.service';
import { Brand } from 'src/app/Shared/Brand';
import { Product } from 'src/app/Shared/Product';
import { SubCategory } from 'src/app/Shared/SubCategory';

@Component({
  selector: 'app-edit-prodcut',
  templateUrl: './edit-prodcut.component.html',
  styleUrls: ['./edit-prodcut.component.scss']
})
export class EditProdcutComponent implements OnInit {
productData:Product

SubCategories: SubCategory[]
Brands: Brand[]
id:number=0
Vendor_id = localStorage.getItem("userId")
imageUrl: any = "./assets/images/def.png"
  fileToUpload!: File
errors:string=""

  constructor(private serviceSubCat: SubcategoryService, private brandService: BrandService,private productservice:ProductService,private router:Router,private actvRoute:ActivatedRoute) { 
this.actvRoute.paramMap.subscribe((params:ParamMap)=>{
  this.productservice.GetProductById(Number(params.get('id'))).subscribe(data=>{
    this.id=Number(params.get('id'))
    this.productData=data
    console.log(data);
  },error=>
  {this.errors=error.error.error_description;console.log(error.error)}
    
  )
  this.serviceSubCat.getAllSubcategories().subscribe(data => {
    this.SubCategories = data;
  })
  this.brandService.GetAllBrand().subscribe(data => {
    this.Brands = data
  })
})




  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.productData.Photo=this.fileToUpload;

    this.productservice.editProduct(this.id,this.productData).subscribe(data => {
     
this.router.navigate(['/product']);

    }, error => {this.errors=error.error.error_description;console.log(error.error)});
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