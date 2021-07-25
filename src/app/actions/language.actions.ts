import { createAction, props } from '@ngrx/store';


export const LANGUAGE_CHANGE = '[Language] Change';

export const change = createAction(
  LANGUAGE_CHANGE,
  props<{language: string}>()
);


