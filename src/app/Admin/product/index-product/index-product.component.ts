import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Shared/Product';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.scss']
})
export class IndexProductComponent implements OnInit {

  products:Product[]
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(data=>{
      this.products=data
    });
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data)
      this.products=this.products.filter(item=>{item.Id!=id})
      this.router.navigate(['/product']);
    },error=>{console.log(error.error)});
  }
}
