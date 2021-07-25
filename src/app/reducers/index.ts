import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {PRODUCT_KEY, productReducer, ProductState} from "./product";
import {LANGUAGE_KEY, languageReducer, LanguageState} from "./language";

export interface State {
  [PRODUCT_KEY]: ProductState
  [LANGUAGE_KEY]: LanguageState
}

export const reducers: ActionReducerMap<State> = {
  [PRODUCT_KEY]: productReducer,
  [LANGUAGE_KEY]: languageReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

