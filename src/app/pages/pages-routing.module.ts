import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'lista-de-productos', component: ListProductsComponent },
      { path: 'detalles/:productId', component: DetailsComponent },
      { path: 'productos', component: ProductsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'lista-de-productos' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
