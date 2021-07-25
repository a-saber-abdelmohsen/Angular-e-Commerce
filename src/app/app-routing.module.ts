import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './Store/product-list/product-list.component';

const routes: Routes = [
 
{path:"productList",component:ProductListComponent},
{path:"homePage",component:HomePageComponent},
{path:'',redirectTo:'/homePage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
