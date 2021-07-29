import { Component, OnInit } from '@angular/core';
import {BrandService} from 'src/app/Services/brand.service';
import { Brand } from 'src/app/Shared/Brand';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
 
  constructor(private _brandService:BrandService, private router:Router) { 
    this._brandService.GetAllBrand().subscribe((data)=>{
      this.brands=data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    
  }

  deletebrand(id: any)
  {
    console.warn(id);
  this._brandService.DeleteBrand(id).subscribe(data=>{
   this.brands=this.brands.filter(item=>item.Id !=id);
    console.log(data)

  });
  }
  
 
}
