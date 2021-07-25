import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import { change } from "../actions/language.actions";

export const LANGUAGE_KEY = 'language';

export interface LanguageState {
  language: string
}

export const initialState: LanguageState = {
  language: ''
};


export const languageReducer = createReducer(
  initialState,
  on(change, (state, payload) => ({
    ...state,
    language: payload.language
  })),
);

export const featureSelector
  = createFeatureSelector<LanguageState>(LANGUAGE_KEY);
export const languageSelector = createSelector(
  featureSelector,
  state => state.language
);

