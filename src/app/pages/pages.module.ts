import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [PagesComponent, ListProductsComponent],
  imports: [CommonModule, PagesRoutingModule, RouterModule, ComponentsModule],
})
export class PagesModule {}
