import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavSelectComponent} from './ngx-devpav-select/ngx-devpav-select.component';
import {NgxDevpavDropdownBoxComponent} from './ngx-devpav-dropdown-box/ngx-devpav-dropdown-box.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';
import {NgxDevpavFormInputModule} from '../ngx-devpav-form-input/ngx-devpav-form-input.module';
import {FilterPipe} from './filter-pipe.pipe';

@NgModule({
  declarations: [
    NgxDevpavSelectComponent,
    NgxDevpavDropdownBoxComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDevpavIconModule,
    NgxDevpavFormInputModule
  ],
  exports: [
    NgxDevpavSelectComponent,
    NgxDevpavDropdownBoxComponent
  ]
})
export class NgxDevpavSelectModule {
}
