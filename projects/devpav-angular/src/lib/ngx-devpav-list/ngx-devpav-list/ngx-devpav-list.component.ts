import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

export interface ListOption {
  id: string;
  name: string;
}

@Component({
  selector: 'ngx-devpav-list',
  templateUrl: './ngx-devpav-list.component.html',
  styleUrls: ['./ngx-devpav-list.component.scss']
})
export class NgxDevpavListComponent implements OnInit, OnChanges {

  @Input()
  public ngxListOptions: ListOption[];

  @Input()
  public ngxMultiple = false;

  @Input()
  public ngxSelectedListOptions: ListOption[];

  selectionModel: SelectionModel<ListOption>;

  @Output()
  public ngxSelect: EventEmitter<ListOption[]> = new EventEmitter<ListOption[]>();


  constructor() {
  }

  ngOnInit() {
    this.selectionModel = new SelectionModel<ListOption>(this.ngxMultiple, this.ngxSelectedListOptions);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let ngxMultiple = false;
    if (changes.ngxMultiple) {
      ngxMultiple = changes.ngxMultiple.currentValue;
      this.selectionModel = new SelectionModel<ListOption>(ngxMultiple, this.ngxSelectedListOptions);
    }
    let ngxSelectedListOptions: ListOption[] = [];
    if (changes.ngxSelectedListOptions) {
      ngxSelectedListOptions = changes.ngxSelectedListOptions.currentValue;
    }
  }

  selectEvent($event: MouseEvent, option) {
    this.selectionModel.toggle(option);
    const selected = this.selectionModel.selected;
    console.log(selected);
    this.ngxSelect.emit(selected);
  }
}
