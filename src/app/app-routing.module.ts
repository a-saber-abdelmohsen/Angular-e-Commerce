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
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { Main_Category } from './Shared/Main_Category';
import { AddMainCategoryComponent } from './Admin/MainCategory/add-main-category/add-main-category.component';
import { EditMainCategoryComponent } from './Admin/MainCategory/edit-main-category/edit-main-category.component';
import { IndexComponent } from './Admin/MainCategory/index/index.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { UsersComponent } from './Admin/users/users.component';
import { AdminsComponent } from './Admin/users/admins/admins.component';
import { VendorsComponent } from './Admin/users/vendors/vendors.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'homePage', component: HomePageComponent, children: [
    { path: 'details/:id', component: DetailsComponent },
    { path: 'search/:id/:term', component: ProductListComponent },
    { path: 'productList/:id', component: ProductListComponent },
    { path: 'productList', component: ProductListComponent },
    { path: 'Cart', component: CartDetailsComponent },
    { path: 'wishlist', component: WishlistDetailsComponent },
    { path: 'CheckOut', component: CheckOutComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'profile/edit/:id', component: RegisterComponent}
  ]},
 

  //AuthPath
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},


  //Admin
  {path: 'admin', component: AdminComponent ,children: [
    { path: 'brand', component: BrandComponent},
    { path: 'AddBrand', component: AddBrandComponent },
    { path: 'EditBrand/:id', component: EditBrandComponent },
    { path: 'MainCategory', component: IndexComponent, children: [
      { path: 'Add', component: AddMainCategoryComponent },
      { path: 'Edit/:id', component: EditMainCategoryComponent },
    ]},
    { path: 'subcategory', component: SubcategoryComponent, children:[
      { path:'Add',component:AddSubcategoryComponent},
      { path:'Edit/:id',component:EditSubcategoryComponent},
    ]},
    { path: 'users', component: UsersComponent, children:[
      { path:'admins',component: AdminsComponent },
      { path:'vendors',component: VendorsComponent },
    ]}
  ]},

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
