import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

export interface NgxDevpavDropdownBox {
  defaultSearchLine?: string;
  isSearchLine: boolean;
  isMultiple?: boolean;
}

@Component({
  selector: 'ngx-devpav-dropdown-box',
  templateUrl: './ngx-devpav-dropdown-box.component.html',
  styleUrls: ['./ngx-devpav-dropdown-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDevpavDropdownBoxComponent implements OnInit, AfterViewInit, OnChanges {

  private selection: SelectionModel<any>;

  @Input()
  items: any[];

  @Input()
  selectedItems: any[] = [];

  searchLine: string;

  constructor() {}

  @Input()
  configDropdown: NgxDevpavDropdownBox = {
    isMultiple: false,
    isSearchLine: false
  };

  ngOnInit() {
    this.selection = new SelectionModel<any>(this.configDropdown.isMultiple, this.selectedItems);
  }

  ngAfterViewInit(): void {

  }

  toggleItem(item: any) {
    this.selection.toggle(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
