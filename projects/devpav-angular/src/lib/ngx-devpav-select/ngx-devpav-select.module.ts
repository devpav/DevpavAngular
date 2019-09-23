import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavSelectComponent} from './ngx-devpav-select/ngx-devpav-select.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgxDevpavDropdownBoxComponent} from './ngx-devpav-dropdown-box/ngx-devpav-dropdown-box.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    NgxDevpavSelectComponent,
    NgxDevpavDropdownBoxComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    HttpClientModule
  ],
  exports: [
    NgxDevpavSelectComponent
  ]
})
export class NgxDevpavSelectModule {
}
