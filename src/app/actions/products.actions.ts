import { createAction, props } from '@ngrx/store';
import {Product} from "../models/product.model";

export const PRODUCT_SEARCH = '[Product] Search';
export const PRODUCT_SEARCH_SUCCESS = '[Product] Search Success';
export const PRODUCT_SEARCH_FAILURE = '[Product] Search Failure';

export const search = createAction(
  PRODUCT_SEARCH,
  props<{query: string}>()
);

export const searchSuccess = createAction(
  PRODUCT_SEARCH_SUCCESS,
  props<any>()
)
;
export const searchFailure = createAction(
  PRODUCT_SEARCH_FAILURE,
  props<{message: string}>()
);
