import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ListOption} from '../../../../projects/devpav-angular/src/lib/ngx-devpav-list/ngx-devpav-list/ngx-devpav-list.component';
import {TimeEvent} from '../../../../projects/devpav-angular/src/lib/ngx-devpav-schedule/ngx-devpav-canvas.schedule';

@Component({
  selector: 'devpav-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit, AfterViewInit {

  @ViewChild('scheduleCanvas', {static: true})
  canvas: ElementRef;

  @ViewChild('container', {static: true})
  container: ElementRef;


  listOptionSelector: ListOption[];

  selected: ListOption[];

  timeEvent: TimeEvent;

  events: TimeEvent[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  setObject() {
    this.listOptionSelector = [
      {
        id: '',
        name: 'Неделя'
      },
      {
        id: '',
        name: 'Месяц'
      },
      {
        id: '',
        name: 'Год'
      }
    ];
  }

  getWidth() {
    this.events = [{
      id: 'uewifj32483',
      name: 'Математический анализ (Пастухов Д. Ф)',
      description: 'Математи́ческий ана́лиз (классический математический анализ) — ' +
        'совокупность разделов математики, соответствующих историческому разделу под наименованием «анализ бесконечно малых», ' +
        'объединяет дифференциальное и интегральное исчисления.',
      start: new Date(1999, 1, 1, 12, 30, 0),
      end: new Date(1999, 1, 1, 13, 50, 0)
    }];
  }

  selectedEvent($event: ListOption[]) {
  }

  ngAfterViewInit(): void {

  }

  eventClick($event: TimeEvent) {
    this.timeEvent = $event;
  }
}
