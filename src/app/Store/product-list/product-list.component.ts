import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BrandService } from 'src/app/Services/brand.service';
import { ProductService } from 'src/app/Services/product.service';
import { Brand } from 'src/app/Shared/Brand';
import { Product } from 'src/app/Shared/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  products: Product[] = [];
  brands: Brand[] = [];
  
  Subid=0;

  constructor(
    private _productService: ProductService,
    private actvRout:ActivatedRoute,
    private _brandService: BrandService
  ) { }

  ngOnInit(): void {
    this.actvRout.paramMap.subscribe((params:ParamMap)=>{
      if(params.get('Subid')!=null){
        this.Subid=Number(params.get('Subid'));
        this._productService.GetProductsBySubCategory(this.Subid).subscribe(data=>{this.products=data})
      }
      else if(params.get('id') != null && params.get('term') != null){
        let id: number = parseInt(params.get('id')!);
        let term: string = params.get('term')!;
        this._productService.SearchProducts(term, id).subscribe(d => {this.products = d; });
      }

      else if(params.get('id') != null){
        let id: string = params.get('id')!;
        this._productService.GetProductsByStore(id).subscribe(d => {this.products = d; });
      }
      else{
        this.Subid=0;
        this._productService.GetProducts().subscribe(d => {this.products = d; });
      }
     
    });

    this._brandService.GetAllBrand().subscribe(d => this.brands = d);
  }

  

}
