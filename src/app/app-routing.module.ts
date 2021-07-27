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
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: 'search/:id/:term', component: ProductListComponent },
  { path: 'productList/:id', component: ProductListComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'Cart', component: CartDetailsComponent },
  { path: 'wishlist', component: WishlistDetailsComponent },
  //Brad Path
  { path: 'brand', component: BrandComponent },
  { path: 'brand/Add', component: AddBrandComponent },
  { path: 'brand/Edit/:id', component: EditBrandComponent },
//AuthPath
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},

  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: '**', redirectTo: '/homePage', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
