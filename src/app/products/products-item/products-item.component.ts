import {Component, Input, OnInit} from '@angular/core';
import {errorSelector, loadingSelector, productSelector} from "../../reducers/product";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {

  public product: Product | undefined;
  private subscription!: Subscription;
  loading$ = this.store.select(loadingSelector);
  error$ = this.store.select(errorSelector);


  constructor(private store: Store) { }

  ngOnInit(): void {
    const product$ = this.store.select(productSelector);
    const productObserve$ = new Observable(observer => {
      observer.next(
        { "name": "Coca-Cola", "images": [ "https://images.openfoodfacts.org/images/products/544/900/005/4227/front_en.180.400.jpg", "https://images.openfoodfacts.org/images/products/544/900/005/4227/ingredients_en.170.400.jpg", "https://images.openfoodfacts.org/images/products/544/900/005/4227/nutrition_en.166.400.jpg" ], "categories": [ "beverages", "carbonated-drinks", "sodas", "non-alcoholic-beverages", "colas", "sweetened-beverages" ], "ingredients": "water, fructose - glucose syrup, carbon dioxide, colorant: e150d, acid: phosphoric acid, natural flavourings (including caffeine),", "stores": "Carrefour, Magasins U,Bim,ICA", "volume": "1 L", "type": "[Product] Search Success" }
      )
      observer.complete()
    });
    this.subscription = product$.subscribe((res) => this.product = res as Product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
