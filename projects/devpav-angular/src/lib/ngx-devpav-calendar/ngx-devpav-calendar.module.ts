import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavCalendarComponent} from './ngx-devpav-calendar/ngx-devpav-calendar.component';
import {NgxDevpavCalendarSectorComponent} from './ngx-devpav-calendar-sector/ngx-devpav-calendar-sector.component';
import {NgxDevpavPanelModule} from '../ngx-devpav-panel/ngx-devpav-panel.module';

@NgModule({
  declarations: [NgxDevpavCalendarComponent, NgxDevpavCalendarSectorComponent],
  exports: [
    NgxDevpavCalendarComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavPanelModule
  ]
})
export class NgxDevpavCalendarModule { }
