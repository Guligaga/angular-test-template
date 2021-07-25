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

  // updatedAt$ = createEffect(() => this.actions$.pipe(
  //   ofType(productActions.search),
  //   map(() => productActions.searchSuccess({
  //     name: 'Coca-cola',
  //     images: ['some-image.jpg'],
  //     categories: ['drink', 'soda'],
  //     stores: 'Auchan, Metro',
  //     ingredients: 'Nitrates, e136',
  //     volume: '1 L'
  //   }))
  // ));

  // loadMovies$ = createEffect(() =>
  //
  //   this.actions$.pipe(
  //     ofType(productActions.search),
  //     mergeMap((action) => this.productService.searchProduct(action.query)
  //       .pipe(
  //         map(response => (productActions.searchSuccess(response))),
  //         catchError(() => of(productActions.searchFailure()))
  //       )
  //     )
  //   )
  // );


  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.search),
      mergeMap(action => {
        console.log('action', action);
        return this.productService.searchProduct(action.query).pipe(
            map(response => (productActions.searchSuccess(response))),
            catchError((err) => of(productActions.searchFailure(err)))
          )
        // return action;
        }
      )
    )
  );

  // search$ = createEffect(
  //   () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
  //     this.actions$.pipe(
  //       ofType(FindBookPageActions.searchBooks),
  //       debounceTime(debounce, scheduler),
  //       switchMap(({ query }) => {
  //         if (query === '') {
  //           return empty;
  //         }
  //
  //         const nextSearch$ = this.actions$.pipe(
  //           ofType(FindBookPageActions.searchBooks),
  //           skip(1)
  //         );
  //
  //         return this.googleBooks.searchBooks(query).pipe(
  //           takeUntil(nextSearch$),
  //           map((books: Book[]) => BooksApiActions.searchSuccess({ books })),
  //           catchError((err) =>
  //             of(BooksApiActions.searchFailure({ errorMsg: err.message }))
  //           )
  //         );
  //       })
  //     )
  // );


}
