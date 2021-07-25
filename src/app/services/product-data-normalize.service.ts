import { Injectable } from '@angular/core';

import {Store} from "@ngrx/store";
import {languageSelector} from "../reducers/language";
import {Observable, Subscription} from "rxjs";


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
  private subscription!: Subscription;
  language!: string;

  constructor(private store: Store) {
    const language$ = this.store.select(languageSelector);
    this.subscription = language$.subscribe((res) => this.language = res as string);
  }

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
    console.log('Search', this.language)
    return this.data[`ingredients_text_with_allergens_${this.language}`]
      // || this.data['ingredients_text_with_allergens_en']
      || 'No available ingredients list on current locale';
  }

  private get stores(): string {
    return  this.data.stores.replace(/,/g, ', ');
  }

  private get volume(): string {
    return this.data.quantity;
  }
}
