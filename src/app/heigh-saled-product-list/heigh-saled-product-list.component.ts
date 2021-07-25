import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../Shared/Product';

@Component({
  selector: 'app-heigh-saled-product-list',
  templateUrl: './heigh-saled-product-list.component.html',
  styleUrls: ['./heigh-saled-product-list.component.scss']
})
export class HeighSaledPRoductListComponent implements OnInit {
heighSaleProduct:Product[]=[]
  constructor(private _productService: ProductService) { 
    this._productService.GetProducts().subscribe(data=>{
      this.heighSaleProduct=data;
      this.heighSaleProduct.sort((a,b)=>b.Sell_Count-a.Sell_Count)
    })
  }

  ngOnInit(): void {
  }

}
