import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavFormInputComponent} from './ngx-devpav-form-input/ngx-devpav-form-input.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [NgxDevpavFormInputComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxDevpavFormInputComponent
  ]
})
export class NgxDevpavFormInputModule { }
