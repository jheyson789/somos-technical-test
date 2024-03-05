import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './shared/services/product.service';
import { LocalDBProductService } from './shared/services/local-db-product.service';
import { LoginService } from './shared/services/login.service';
import { LocalDBLoginService } from './shared/services/local-db-login.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    {
      provide: ProductService,
      useClass: LocalDBProductService,
    },
    {
      provide: LoginService,
      useClass: LocalDBLoginService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
