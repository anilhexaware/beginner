import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { LoginComponent } from './login/login.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    children: [
      { path: 'view', component: ProductViewComponent },
      { path: 'edit', component: ProductEditComponent },
    ],
  },
  { path: 'products', component: ProductsComponent },
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent, canActivate: [AdminGuardGuard] },
  { path: 'order/:id/:id2', component: OrderViewComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
