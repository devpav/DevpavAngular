import {Component, Input, OnInit} from '@angular/core';
import {TimeEvent} from '../ngx-devpav-canvas.schedule';

@Component({
  selector: 'ngx-devpav-schedule-event',
  templateUrl: './ngx-devpav-schedule-event.component.html',
  styleUrls: ['./ngx-devpav-schedule-event.component.scss']
})
export class NgxDevpavScheduleEventComponent implements OnInit {

  @Input()
  timeEvent: TimeEvent;

  constructor() { }

  ngOnInit() {
  }

}
