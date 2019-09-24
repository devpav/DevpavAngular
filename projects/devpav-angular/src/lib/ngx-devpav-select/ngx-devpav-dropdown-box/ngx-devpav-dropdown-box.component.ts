import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'ngx-devpav-dropdown-box',
  templateUrl: './ngx-devpav-dropdown-box.component.html',
  styleUrls: ['./ngx-devpav-dropdown-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDevpavDropdownBoxComponent implements OnInit, AfterViewInit {

  selection: SelectionModel<any>;

  items = [];
  selectedItems: any[] = [];
  multiple: boolean;

  searchLine: string;

  constructor() {}

  ngOnInit() {
    this.selection = new SelectionModel<any>(this.multiple, this.selectedItems);

    for (let i = 0; i < 100; i++) {
      this.items.push({ value: `value ${i}`});
    }
  }

  ngAfterViewInit(): void {

  }

  toggleItem(item: any) {
    this.selection.toggle(item);
  }

}
