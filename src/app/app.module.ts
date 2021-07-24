import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './NavBar/nav-bar/nav-bar.component';
import { StoreComponent } from './Store/store/store.component';
import { ProductComponent } from './Store/product/product.component';
import { ProductListComponent } from './Store/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    HeaderComponent,
    NavBarComponent,
    StoreComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
