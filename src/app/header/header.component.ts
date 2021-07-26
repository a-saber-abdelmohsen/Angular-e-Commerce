import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { SubCategoryNavBarService } from '../Services/sub-category-nav-bar.service';
import { SubCategoryForVanBar } from '../Shared/SubCategoryForNavBar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subCats: SubCategoryForVanBar[] = [];

  subId: number = 0;
  searchTerm: string = "";

  constructor(
    private _subCatService: SubCategoryNavBarService,
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._subCatService.GetSubWithChild().subscribe(d => this.subCats = d);
  }

  Search(): void {
    let url = "/search/"+this.subId+"/"+this.searchTerm;
    this._router.navigate([url]);
  }
}
