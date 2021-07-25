import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {search, searchFailure, searchSuccess} from "../actions/products.actions";
import {Product} from "../models/product.model";

export const PRODUCT_KEY = 'product';

export interface ProductState {
  product: Product | null;
  error: string | null
  loading: boolean
}

export const initialState: ProductState = {
  product: null,
  error: null,
  loading: false
};


export const productReducer = createReducer(
  initialState,
  on(search, (state) => ({
    ...state,
    loading: true
  })),
  on(searchSuccess, (state, res) => ({
    ...state,
    product: res,
    loading: false
  })),
  on(searchFailure, (state, err) => ({
    ...state,
    error: err.message,
    loading: false
  })),
);

export const featureSelector
  = createFeatureSelector<ProductState>(PRODUCT_KEY);
export const productSelector = createSelector(
  featureSelector,
  state => state.product
);

export const errorSelector = createSelector(
  featureSelector,
  state => state.error
);

export const loadingSelector = createSelector(
  featureSelector,
  state => state.loading
);
