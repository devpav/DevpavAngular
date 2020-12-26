import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavScheduleComponent} from './ngx-devpav-schedule/ngx-devpav-schedule.component';
import {NgxDevpavPanelModule} from '../ngx-devpav-panel/ngx-devpav-panel.module';
import {NgxDevpavCanvasSchedule} from './ngx-devpav-canvas.schedule';
import {NgxDevpavLayoutModule} from '../ngx-devpav-layout/ngx-devpav-layout.module';

@NgModule({
  declarations: [NgxDevpavScheduleComponent],
  exports: [
    NgxDevpavScheduleComponent
  ],
  providers: [
    NgxDevpavCanvasSchedule
  ],
  imports: [
    CommonModule,
    NgxDevpavPanelModule,
    NgxDevpavLayoutModule
  ]
})
export class NgxDevpavScheduleModule { }
