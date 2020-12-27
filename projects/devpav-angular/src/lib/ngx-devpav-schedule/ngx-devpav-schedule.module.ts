import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavScheduleComponent} from './ngx-devpav-schedule/ngx-devpav-schedule.component';
import {NgxDevpavPanelModule} from '../ngx-devpav-panel/ngx-devpav-panel.module';
import {NgxDevpavCanvasSchedule} from './ngx-devpav-canvas.schedule';
import {NgxDevpavLayoutModule} from '../ngx-devpav-layout/ngx-devpav-layout.module';
import {NgxDevpavScheduleEventComponent} from './ngx-devpav-schedule-event/ngx-devpav-schedule-event.component';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';

@NgModule({
  declarations: [NgxDevpavScheduleComponent, NgxDevpavScheduleEventComponent],
  exports: [
    NgxDevpavScheduleComponent,
    NgxDevpavScheduleEventComponent
  ],
  providers: [
    NgxDevpavCanvasSchedule
  ],
  imports: [
    CommonModule,
    NgxDevpavPanelModule,
    NgxDevpavLayoutModule,
    NgxDevpavIconModule
  ]
})
export class NgxDevpavScheduleModule { }
