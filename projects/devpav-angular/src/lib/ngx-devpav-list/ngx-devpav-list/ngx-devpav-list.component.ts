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
  public ngxSelect: EventEmitter<ListOption | ListOption[]> = new EventEmitter<ListOption | ListOption[]>();


  constructor() {
  }

  ngOnInit() {
    this.selectionModel = new SelectionModel<ListOption>(this.ngxMultiple, this.ngxSelectedListOptions);

    this.selectionModel.changed.subscribe(it => {
      const array = it.source.selected;
      this.ngxSelect.emit(this.ngxMultiple ? array[0] : array);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  selectEvent($event: MouseEvent, option) {
    this.selectionModel.toggle(option);
  }
}
