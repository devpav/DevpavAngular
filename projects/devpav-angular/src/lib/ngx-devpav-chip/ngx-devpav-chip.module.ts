import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavChipComponent} from './ngx-devpav-chip/ngx-devpav-chip.component';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';

@NgModule({
  declarations: [NgxDevpavChipComponent],
  exports: [
    NgxDevpavChipComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavIconModule
  ]
})
export class NgxDevpavChipModule { }
