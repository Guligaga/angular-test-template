import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsItemComponent } from './products/products-item/products-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductDataNormalizeService} from "./services/product-data-normalize.service";
import {ProductService} from "./services/product.service";
import { EffectsModule } from '@ngrx/effects';
import {environment} from "../environments/environment";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {ProductEffects} from "./effects/product.effects";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductsFormComponent,
    ProductsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    NgbModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ProductEffects]),
    HttpClientModule
  ],
  providers: [
    ProductDataNormalizeService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
