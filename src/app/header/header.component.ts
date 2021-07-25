import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as languageActions from "../actions/language.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages = [
    {
      code: navigator.language.slice(0,2),
      label: navigator.language,
      selected: false
    },
    {
      code: 'en',
      label: 'English',
      selected: false
    },
    {
      code: 'fr',
      label: 'French',
      selected: false
    },
    {
      code: 'de',
      label: 'Deutch',
      selected: false
    },
    {
      code: 'es',
      label: 'Spanish',
      selected: false
    },
  ];

  constructor(private store: Store) { }

  ngOnInit(): void {
    const lang = navigator.language.slice(0, 2);
    console.log('onInit', lang)
    this.store.dispatch(languageActions.change({language: lang}))
  }

  setLanguage(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.store.dispatch(languageActions.change({language: target.value}))
  }

}
