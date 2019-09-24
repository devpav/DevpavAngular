import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavSelectComponent} from './ngx-devpav-select/ngx-devpav-select.component';
import {NgxDevpavDropdownBoxComponent} from './ngx-devpav-dropdown-box/ngx-devpav-dropdown-box.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';
import {NgxDevpavFormInputModule} from '../ngx-devpav-form-input/ngx-devpav-form-input.module';
import {FilterPipe} from './filter-pipe.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxDevpavChipModule} from '../ngx-devpav-chip/ngx-devpav-chip.module';

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
    NgxDevpavFormInputModule,
    BrowserAnimationsModule,
    NgxDevpavChipModule
  ],
  exports: [
    NgxDevpavSelectComponent,
    NgxDevpavDropdownBoxComponent
  ]
})
export class NgxDevpavSelectModule {
}
