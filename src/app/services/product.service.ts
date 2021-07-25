import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ProductDataNormalizeService} from "./product-data-normalize.service";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_PATH = 'https://world.openfoodfacts.org/api/v0/product';

  constructor(
    private http: HttpClient,
    private productDataNormalizeService: ProductDataNormalizeService
  ) {}


  searchProduct(barcode: string) {
    return this.http
      .get(`${this.API_PATH}/${barcode}.json`)
      .pipe(
        map((product) => (this.productDataNormalizeService.exec(product)))
      )
  }

}
