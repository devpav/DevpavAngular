import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavSelectorComponent} from './ngx-devpav-singleton-selecor/ngx-devpav-selector.component';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';
import {NgxDevpavFormInputModule} from '../ngx-devpav-form-input/ngx-devpav-form-input.module';
import {NgxDevpavListModule} from '../ngx-devpav-list/ngx-devpav-list.module';


@NgModule({
  declarations: [NgxDevpavSelectorComponent],
  exports: [
    NgxDevpavSelectorComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavIconModule,
    NgxDevpavFormInputModule,
    NgxDevpavListModule
  ]
})
export class NgxDevpavSelectorModule { }
