import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CanActivate, Router } from '@angular/router';
import { AuthGuard } from './auth/authGuard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { hideNavbar: false } },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    data: { hideNavbar: false },
  },

  { path: 'login', component: LoginComponent, data: { hideNavbar: false } },
  {
    path: 'products/:id/edit',
    component: AddProductComponent,
    data: { hideNavbar: false },
  },
  {
    path: 'products/:id/details',
    component: ProductDetailsComponent,
    data: { hideNavbar: false },
  },
  { path: '**', component: NotFoundComponent, data: { hideNavbar: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
