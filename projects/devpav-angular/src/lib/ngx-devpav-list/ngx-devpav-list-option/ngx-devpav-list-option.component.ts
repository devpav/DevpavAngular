import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListOption} from '../ngx-devpav-list/ngx-devpav-list.component';

@Component({
  selector: 'ngx-devpav-list-option',
  templateUrl: './ngx-devpav-list-option.component.html',
  styleUrls: ['./ngx-devpav-list-option.component.scss']
})
export class NgxDevpavListOptionComponent implements OnInit {

  @Input()
  ngxOption: ListOption;

  @Input()
  ngxSelected: boolean = false;

  @Output()
  ngxSelect: EventEmitter<ListOption> = new EventEmitter<ListOption>();

  constructor() { }

  ngOnInit() {
  }

}
