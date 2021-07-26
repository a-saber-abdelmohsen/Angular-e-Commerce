import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Shared/Brand';
import {BrandService} from 'src/app/Services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.scss']
})
export class EditBrandComponent implements OnInit {
  EditForm=new FormGroup({
    Name:new FormControl(''),
    Photo:new FormControl('')
  })
  brand:Brand[]=[];
 
  constructor(private router:ActivatedRoute,private _brandService:BrandService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this._brandService.getById(this.router.snapshot.params.id).subscribe((data)=>{
    // this.brand=data;
    
      console.log(data[0]);
    })
 
  }

}
