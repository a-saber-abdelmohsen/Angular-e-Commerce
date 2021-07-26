import { Component, OnInit } from '@angular/core';
import{ProductdetailsService} from 'src/app/Services/productdetails.service';
import { Product } from 'src/app/Shared/Product';
import { ProductDetails } from 'src/app/Shared/ProductDetails';
import { RatingDetailsForProduct } from 'src/app/Shared/RatingDetailsForProduct';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productdetails:ProductDetails=new ProductDetails("",0,"",0,"",0,0,0,new Date('12/1/2020'),"0",0,0,"",new RatingDetailsForProduct(0,0,0,0,0,0,0,0,0,0,0,0,0),[],[]);

  constructor(private _productdetailsService: ProductdetailsService) { }

  ngOnInit(): void {
    this._productdetailsService.GetProductDetails().subscribe(d => {this.productdetails = d; console.log(d) })
  }

}
