import {Component, OnInit} from '@angular/core';
import {ListOption} from '../../../../projects/devpav-angular/src/lib/ngx-devpav-list/ngx-devpav-list/ngx-devpav-list.component';

@Component({
  selector: 'devpav-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  listOptionSelector: ListOption[];

  selected: ListOption[];

  constructor() { }

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

  selectedEvent($event: ListOption[]) {
    this.selected = $event;
  }
}
