import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loadingSelector} from "../../reducers/product";
import {search} from "../../actions/products.actions";

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  public form!: FormGroup;
  loading$ = this.store.select(loadingSelector);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      query: new FormControl('5449000054227'),
    });
  }

  sendRequest() {
    const formData = {...this.form.value};
    this.store.dispatch(search(formData));
  }
}
