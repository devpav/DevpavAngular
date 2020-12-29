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
    this.setObject();
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
    this.events = [
      {
        id: '1',
        name: 'Математический анализ (Пастухов Д. Ф)',
        description: 'Курс знакомит слушателей с базовыми понятиями математического анализа: последовательностями, пределами, непрерывностью.',
        start: new Date(1999, 1, 1, 12, 30, 0),
        end: new Date(1999, 1, 1, 13, 50, 0)
      },
      {
        id: '2',
        name: 'Английский язык (Чувилина А. А.)',
        description: 'Англи́йский язы́к (самоназвание — English, the English language) — язык англо-фризской подгруппы западной группы германской ветви индоевропейской языковой семьи',
        start: new Date(1999, 1, 1, 13, 55, 0),
        end: new Date(1999, 1, 1, 14, 50, 0)
      },
      {
        id: '3',
        name: 'Языки программирования (Сущевский Д. В.)',
        description: 'Язы́к программи́рования — формальный язык, предназначенный для записи компьютерных программ',
        start: new Date(1999, 1, 1, 15, 0, 0),
        end: new Date(1999, 1, 1, 16, 20, 0)
      }
    ];
  }

  selectedEvent($event: ListOption[]) {
  }

  ngAfterViewInit(): void {

  }

  eventClick($event: TimeEvent) {
    this.timeEvent = $event;
  }
}
