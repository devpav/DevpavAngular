import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavButtonComponent} from './ngx-devpav-button/ngx-devpav-button.component';
import {NgxDevpavButtonStepperComponent} from './ngx-devpav-button-steper/ngx-devpav-button-stepper.component';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';


@NgModule({
    declarations: [NgxDevpavButtonComponent, NgxDevpavButtonStepperComponent],
  exports: [
    NgxDevpavButtonComponent,
    NgxDevpavButtonStepperComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavIconModule
  ]
})
export class NgxDevpavButtonModule { }
