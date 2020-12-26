import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {dropdownAnimation} from '../../ngx-devpav-animations/dropdown-animation';
import {ListOption} from '../../ngx-devpav-list/ngx-devpav-list/ngx-devpav-list.component';


@Component({
  selector: 'ngx-devpav-singleton-selector',
  templateUrl: './ngx-devpav-singleton-selector.component.html',
  styleUrls: ['./ngx-devpav-singleton-selector.component.scss'],
  animations: [
    dropdownAnimation(0.4)
  ]
})
export class NgxDevpavSingletonSelectorComponent implements OnInit {

  @Input()
  public set ngxOpened(value: boolean) {
    this.flopState = value ? 'open' : 'close';
  }

  constructor() { }

  flopState = 'open';

  @Input()
  public title: string;

  @Input()
  public ngxListOptions: ListOption[];

  @Input()
  public ngxSelected: ListOption[];

  @Input()
  public icon: string;

  @Input()
  ngxSearchLine = false;

  @Output()
  public ngxSelect: EventEmitter<ListOption[]> = new EventEmitter<ListOption[]>();


  ngOnInit() {
    console.log(this.ngxListOptions);
  }


  setDropdownState() {
    this.flopState = this.flopState === 'close' ? 'open' : 'close';
  }

  isUnFlopped(): boolean {
    return this.flopState === 'close';
  }

  selectOptions($event: ListOption | ListOption[]) {
    this.ngxSelected = !Array.isArray($event) ? [$event] : $event;
    this.ngxSelect.emit(!Array.isArray($event) ? [$event] : $event);
  }

  valueBlur($event: FocusEvent) {
    console.log($event);
  }
}
