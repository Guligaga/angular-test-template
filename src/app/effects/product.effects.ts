import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, debounceTime, map, mergeMap, switchMap,} from 'rxjs/operators';

import {ProductService} from "../services/product.service";
import * as productActions from "../actions/products.actions";
import {asyncScheduler, of} from "rxjs";

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.search),
      mergeMap(action => (
          this.productService.searchProduct(action.query).pipe(
              map(response => (productActions.searchSuccess(response))),
              catchError((err) => of(productActions.searchFailure(err)))
          )
        )
      )
    )
  );

}
