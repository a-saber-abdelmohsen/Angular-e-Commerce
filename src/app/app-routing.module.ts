import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './Store/product-list/product-list.component';
import { WishlistDetailsComponent } from './wishlist-details/wishlist-details.component';
import { BrandComponent } from './Admin/brand/Index/brand.component';
import { AddBrandComponent } from './Admin/brand/add-brand/add-brand.component';
import { EditBrandComponent } from './Admin/brand/edit-brand/edit-brand.component';
import { EditSubcategoryComponent } from './Admin/subcategory/edit-subcategory/edit-subcategory.component';
import { AddSubcategoryComponent } from './Admin/subcategory/add-subcategory/add-subcategory.component';
import { SubcategoryComponent } from './Admin/subcategory/index/subcategory.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: 'search/:id/:term', component: ProductListComponent },
  { path: 'productList/:id', component: ProductListComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'Cart', component: CartDetailsComponent },
  { path: 'wishlist', component: WishlistDetailsComponent },
   //Subcategory Path
   { path: 'subcategory', component: SubcategoryComponent },
   {path:'subcategory/Add',component:AddSubcategoryComponent},
   {path:'subcategory/Edit/:id',component:EditSubcategoryComponent},
    //Brad Path
    { path: 'brand', component: BrandComponent },
      {path:'brand/Add',component:AddBrandComponent},
      {path:'brand/Edit/:id',component:EditBrandComponent},
 
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: '**', redirectTo: '/homePage', pathMatch: 'full' },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
