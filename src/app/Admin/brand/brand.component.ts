import { Component, OnInit } from '@angular/core';
import {BrandService} from 'src/app/Services/brand.service';
import { Brand } from 'src/app/Shared/Brand';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  url:string="http://localhost:9602/api/brand";
  constructor(private _brandService:BrandService, private _http:HttpClient) { }

  ngOnInit(): void {
    this._brandService.GetAllBrand().subscribe((data)=>{
      this.brands=data;
      console.log(data);
    })
  }
  
  onSubmit(data: any)
  {
    this._http.post(this.url,data).subscribe((result)=>{console.warn("result",result)});
    console.warn(data);
  }
}
