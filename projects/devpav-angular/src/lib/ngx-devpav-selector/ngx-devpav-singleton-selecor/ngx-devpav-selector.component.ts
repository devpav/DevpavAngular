import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListOption} from '../../ngx-devpav-list/ngx-devpav-list/ngx-devpav-list.component';
import {dropdownSelectorAnimation} from '../../ngx-devpav-animations/dropdown-animation';


@Component({
  selector: 'ngx-devpav-selector',
  templateUrl: './ngx-devpav-selector.component.html',
  styleUrls: ['./ngx-devpav-selector.component.scss'],
  animations: [
    dropdownSelectorAnimation(0.2)
  ]
})
export class NgxDevpavSelectorComponent implements OnInit {

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
    const listOptions = this.ngxSelected
      ? this.ngxSelected.map(it => it.id).map(value => this.ngxListOptions.find(obj => obj.id === value))
      : [];

    if (listOptions) {
      if (listOptions.length === 0) {
        title = this.title;
      } else if (listOptions.length === 1) {
        let name = listOptions[0].name;

        if (name.length > 40) {
          name = name.substring(0, 40);
          name += '...';
        }

        title = name;
      } else {
        const valueList: string[] = [];
        const count = Math.min(3, listOptions.length);

        for (let i = 0; i < count; i++) {
          valueList.push(listOptions[i].name);
        }
        title = valueList.join(', ');

        let stringTmp = title.substring(0, 40);

        if (listOptions.length > 3) {
          stringTmp += ' + ' + (listOptions.length - ((title.length > 40) ? 0 : 3));
        } else if (title.length > 40) {
          stringTmp += ' + ' + (listOptions.length - 1);
        }

        title = stringTmp;
      }
    } else {
      title = this.title;
    }

    return title;
  }

}
