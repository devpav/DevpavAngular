import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavListComponent} from './ngx-devpav-list/ngx-devpav-list.component';
import {NgxDevpavLayoutModule} from '../ngx-devpav-layout/ngx-devpav-layout.module';
import {NgxDevpavListOptionComponent} from './ngx-devpav-list-option/ngx-devpav-list-option.component';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';
import {NgxDevpavLoaderModule} from '../ngx-devpav-loader/ngx-devpav-loader.module';


@NgModule({
  declarations: [NgxDevpavListComponent, NgxDevpavListOptionComponent],
  exports: [
    NgxDevpavListComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavLayoutModule,
    NgxDevpavIconModule,
    NgxDevpavLoaderModule
  ]
})
export class NgxDevpavListModule { }
