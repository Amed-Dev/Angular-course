import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import { AuthGuard} from './auth.guard';


export const routes: Routes = [
  {path:'' , component: HomeComponent },
  {path:'about' , component: AboutComponent},
  {path:'contact' , component: ContactComponent},
  {path:'products' , component: ProductComponent},
  {path:'product/:id' , component: ProductDetailComponent, canActivate: [AuthGuard]},

];
