import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Shared/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  products: Product[] = [];


  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this._productService.GetProducts().subscribe(d => {this.products = d; console.log(d) });
  }

}
