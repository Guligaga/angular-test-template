import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Product} from "../models/product.model";


// export interface Product {
//   name: string;
//   images: string[];
//   categories: string[];
//   ingredients: string
//   stores: string[];
//   volume: string;
// }
type ImageObj = {
  display: {
    en: string
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductDataNormalizeService {
  private data: any;
  private mockLang: string = 'en';

  constructor() {}

  public exec(data: any) {
    this.setData(data.product);
    const res = {
      name: this.name,
      images: this.images,
      categories: this.categories,
      ingredients: this.ingredients,
      stores: this.stores,
      volume: this.volume,
    }
    console.log(res);
    return res;
  }

  private setData(data: any) {
    this.data = data;
  }

  private get name(): string {
    return this.data.product_name;
  }

  private get images(): string[] {
    const displays = Object.values<ImageObj>(this.data.selected_images)
      .map((image) => Object.values(image.display));
    return displays.reduce((acc, display) => acc.concat(display), []);
  }

  private get categories(): string[] {
    return  this.data.categories_tags
      .filter((cat: string) => cat.startsWith('en'))
      .map((cat: string) => cat.slice(3));
  }

  private get ingredients(): string {
    return this.data[`ingredients_text_with_allergens_${this.mockLang}`];
  }

  private get stores(): string {
    return  this.data.stores.replace(/,/g, ', ');
  }

  private get volume(): string {
    return this.data.quantity;
  }
}
