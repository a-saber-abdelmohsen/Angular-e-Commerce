import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Shared/Brand';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {
  
  brands:Brand[]=[];
  url:string="http://localhost:9602/api/brand";
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(data: any)
  {
    this._http.post(this.url,data).subscribe(
      (result)=>{console.warn("result",result)});
      console.warn(data);
  }

}
