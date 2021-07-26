import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import{ProductdetailsService} from 'src/app/Services/productdetails.service';
import { Product } from 'src/app/Shared/Product';
import { ProductDetails } from 'src/app/Shared/ProductDetails';
import { RatingDetailsForProduct } from 'src/app/Shared/RatingDetailsForProduct';
import { Rating2 } from 'src/app/Shared/Rating2';
import { Rating } from 'src/app/Shared/Rating';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productdetails:ProductDetails=new ProductDetails("",0,"",0,"",0,0,0,new Date('12/1/2020'),"0",0,0,"",new RatingDetailsForProduct(0,0,0,0,0,0,0,0,0,0,0,0,0),[],[]);

  constructor(private _productdetailsService: ProductdetailsService,
    private activatedRoute:ActivatedRoute,
    private _router: Router
    ) {}
  id:number=0;
  email:string="";
  error:string="";
  ratingModel=new Rating2(0,"",new Date('12/1/2020'),"",0,"");
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parms:ParamMap)=>{
      this.id=parseInt(parms.get('id')!);
    });
    this._productdetailsService.GetProductDetails(this.id).subscribe(d => {this.productdetails = d; console.log(d) })
  }
  GetAvgRating(ratings: Rating[]): Number
  {
    let sum = 0;
    if(ratings==null || ratings.length == 0)
      return sum;

    ratings.forEach(rate => {
      sum += rate.Rate;
    });

    return sum/ratings.length
  }
  onSubmit()
{
//console.log(this.userModel);
    alert("inside");
    this.ratingModel.Product_Id=this.productdetails.Id;
    this._productdetailsService.enroll(this.ratingModel).
    subscribe(
    response =>{ 
      console.log('Success!', response);
      this.ratingModel.Comment="";
      this.ratingModel.Username="";
      this.email="";
      this.ratingModel.Rate=0;
      this._productdetailsService.GetProductDetails(this.productdetails.Id).subscribe(d => {this.productdetails = d; console.log(d) })
  }
    ,
    error => {
      console.log('error',error);
      this.ratingModel.Comment="";
      this.ratingModel.Username="";
      this.email="";
      this.ratingModel.Rate=0;
      this.error=error.error.Message;
    }
   )
   
}


}
