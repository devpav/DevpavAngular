import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {dropdownAnimation} from '../../ngx-devpav-animations/dropdown-animation';
import {ListOption} from '../../ngx-devpav-list/ngx-devpav-list/ngx-devpav-list.component';


@Component({
  selector: 'ngx-devpav-singleton-selector',
  templateUrl: './ngx-devpav-singleton-selector.component.html',
  styleUrls: ['./ngx-devpav-singleton-selector.component.scss'],
  animations: [
    dropdownAnimation(0.2)
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

  @Output()
  public ngxSelect = new EventEmitter<ListOption[]>();


  ngOnInit() {
  }


  setDropdownState() {
    this.flopState = this.flopState === 'close' ? 'open' : 'close';
  }

  isUnFlopped(): boolean {
    return this.flopState === 'close';
  }

  selectOptions($event: ListOption[]) {
    this.ngxSelect.emit($event);
  }

}
