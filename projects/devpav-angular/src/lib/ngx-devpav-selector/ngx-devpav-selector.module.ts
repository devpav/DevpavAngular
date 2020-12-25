import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavSingletonSelectorComponent} from './ngx-devpav-singleton-selecor/ngx-devpav-singleton-selector.component';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';
import {NgxDevpavFormInputModule} from '../ngx-devpav-form-input/ngx-devpav-form-input.module';
import {NgxDevpavLayoutModule} from '../ngx-devpav-layout/ngx-devpav-layout.module';
import {NgxDevpavListModule} from '../ngx-devpav-list/ngx-devpav-list.module';
import {NgxDevpavLoaderModule} from '../ngx-devpav-loader/ngx-devpav-loader.module';


@NgModule({
  declarations: [NgxDevpavSingletonSelectorComponent],
  exports: [
    NgxDevpavSingletonSelectorComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavIconModule,
    NgxDevpavFormInputModule,
    NgxDevpavLayoutModule,
    NgxDevpavListModule,
    NgxDevpavLoaderModule
  ]
})
export class NgxDevpavSelectorModule { }
