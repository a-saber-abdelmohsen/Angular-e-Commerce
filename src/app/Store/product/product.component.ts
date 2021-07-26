import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/Product';
import { Rating } from 'src/app/Shared/Rating';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
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

  
  GoToDetails(): void{
    let url = "/details/"+this.product.Id;
    this._router.navigate([url]);
  }
}
