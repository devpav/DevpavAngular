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

  selectionModel: SelectionModel<string>;


  @Output()
  public ngxSelect: EventEmitter<ListOption[]> = new EventEmitter<ListOption[]>();


  constructor() {
  }

  ngOnInit() {
    const selectedListOptions = this.ngxSelectedListOptions ? this.ngxSelectedListOptions.map(it => it.id).filter(object => object) : [];
    this.selectionModel = new SelectionModel<string>(this.ngxMultiple, selectedListOptions);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const ngxMultiple = !!changes.ngxMultiple ? changes.ngxMultiple.currentValue : false;
    const selectedListOptions = this.ngxSelectedListOptions ? this.ngxSelectedListOptions.map(it => it.id).filter(object => object) : [];
    this.selectionModel = new SelectionModel<string>(ngxMultiple, selectedListOptions);
  }

  selectEvent($event: MouseEvent, option: ListOption) {
    this.selectionModel.toggle(option.id);
    const selected = this.selectionModel.selected;
    const listOptions = selected.map(id => this.ngxListOptions.find(obj => obj.id === id));
    this.ngxSelect.emit(listOptions);
  }

}
