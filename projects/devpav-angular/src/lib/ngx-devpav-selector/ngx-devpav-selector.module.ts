import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavSingletonSelectorComponent} from './ngx-devpav-singleton-selecor/ngx-devpav-singleton-selector.component';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';
import {NgxDevpavFormInputModule} from '../ngx-devpav-form-input/ngx-devpav-form-input.module';
import {NgxDevpavListModule} from '../ngx-devpav-list/ngx-devpav-list.module';


@NgModule({
  declarations: [NgxDevpavSingletonSelectorComponent],
  exports: [
    NgxDevpavSingletonSelectorComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavIconModule,
    NgxDevpavFormInputModule,
    NgxDevpavListModule
  ]
})
export class NgxDevpavSelectorModule { }
