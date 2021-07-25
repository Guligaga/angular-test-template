import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {PRODUCT_KEY, productReducer, ProductState} from "./product";

export interface State {
  [PRODUCT_KEY]: ProductState
}

export const reducers: ActionReducerMap<State> = {
  [PRODUCT_KEY]: productReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

