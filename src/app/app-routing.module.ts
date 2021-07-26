import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { DetailsComponent } from './details/details.component';
=======
import { CartDetailsComponent } from './cart-details/cart-details.component';
>>>>>>> Stashed changes
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './Store/product-list/product-list.component';
import { WishlistDetailsComponent } from './wishlist-details/wishlist-details.component';

const routes: Routes = [
<<<<<<< Updated upstream
 {path:"details/:id",component:DetailsComponent},
=======
{path:"search/:id/:term", component:ProductListComponent},
{path:"productList/:id",component:ProductListComponent}, 
>>>>>>> Stashed changes
{path:"productList",component:ProductListComponent},
{path:"homePage",component:HomePageComponent},
{path:"Cart", component: CartDetailsComponent},
{path:"wishlist", component: WishlistDetailsComponent},
{path:'',redirectTo:'/homePage',pathMatch:'full'},
{path:'**',redirectTo:'/homePage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
