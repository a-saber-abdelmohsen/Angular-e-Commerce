import { Component, OnInit } from '@angular/core';
import {BrandService} from 'src/app/Services/brand.service';
import { Brand } from 'src/app/Shared/Brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  constructor(private _brandService:BrandService) { }

  ngOnInit(): void {
    this._brandService.GetAllBrand().subscribe((data)=>{
      this.brands=data;
      console.log(data);
    })
  }

}
