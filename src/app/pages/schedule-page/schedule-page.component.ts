import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'devpav-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent implements OnInit {

  mouths: string[] = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  month: number = 1;

  year: number = 2020;

  constructor() { }

  ngOnInit() {
  }

}
