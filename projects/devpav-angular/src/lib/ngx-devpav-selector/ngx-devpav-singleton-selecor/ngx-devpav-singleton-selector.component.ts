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

  @Input()
  ngxMultiSelect = false;

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
    this.ngxSelected = $event;
    this.ngxSelect.emit($event);
  }

  mouse($event: MouseEvent) {
    this.flopState = 'close';
  }

  getHeaderName() {
    let title = '';
    if (this.ngxSelected) {
      if (this.ngxSelected.length === 0) {
        title = this.title;
      } else if (this.ngxSelected.length === 1) {
        let name = this.ngxSelected[0].name;

        if (name.length > 40) {
          name = name.substring(0, 40);
          name += '...';
        }

        title = name;
      } else {
        const valueList: string[] = [];
        const count = Math.min(3, this.ngxSelected.length);

        for (let i = 0; i < count; i++) {
          valueList.push(this.ngxSelected[i].name);
        }
        title = valueList.join(', ');

        let stringTmp = title.substring(0, 40);

        if (this.ngxSelected.length > 3) {
          stringTmp += ' + ' + (this.ngxSelected.length - ((title.length > 40) ? 0 : 3));
        } else if (title.length > 40) {
          stringTmp += ' + ' + (this.ngxSelected.length - 1);
        }

        title = stringTmp;
      }
    } else {
      title = this.title;
    }

    return title;
  }
}
