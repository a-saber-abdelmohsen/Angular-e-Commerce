import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Shared/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  products: Product[] = [];
  
Subid=0;

  constructor(
    private _productService: ProductService,private actvRout:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actvRout.paramMap.subscribe((params:ParamMap)=>{
      if(params.get('Subid')==null){
        this.Subid=0;
        this._productService.GetProducts().subscribe(d => {this.products = d; console.log(d) });
      }else{
        this.Subid=Number(params.get('Subid'));
        this._productService.GetProductsBySubCategory(this.Subid).subscribe(data=>{this.products=data})
      }
     
      });
    
  }

}
