import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavLoaderContainerComponent} from './ngx-devpav-loader-container/ngx-devpav-loader-container.component';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';


@NgModule({
  declarations: [NgxDevpavLoaderContainerComponent],
  exports: [
    NgxDevpavLoaderContainerComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  providers: [
    NgxSpinnerService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxDevpavLoaderModule { }
