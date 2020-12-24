import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavFlopPanelComponent} from './ngx-devpav-flop-panel/ngx-devpav-flop-panel.component';
import {NgxDevpavPanelModule} from '../ngx-devpav-panel/ngx-devpav-panel.module';
import {NgxDevpavLayoutModule} from '../ngx-devpav-layout/ngx-devpav-layout.module';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';

@NgModule({
  declarations: [NgxDevpavFlopPanelComponent],
  exports: [
    NgxDevpavFlopPanelComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavPanelModule,
    NgxDevpavLayoutModule,
    NgxDevpavIconModule
  ]
})
export class NgxDevpavFlopPanelModule { }
