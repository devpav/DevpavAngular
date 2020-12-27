import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-calendar-sector',
  templateUrl: './ngx-devpav-calendar-sector.component.html',
  styleUrls: ['./ngx-devpav-calendar-sector.component.scss']
})
export class NgxDevpavCalendarSectorComponent implements OnInit {

  @Input()
  date: Date;

  @Input()
  ngxEventCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
