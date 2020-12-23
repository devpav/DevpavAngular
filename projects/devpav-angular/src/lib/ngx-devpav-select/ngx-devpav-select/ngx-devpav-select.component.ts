import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxDevpavDropdownBoxComponent, NgxDevpavDropdownBoxConfig} from '../ngx-devpav-dropdown-box/ngx-devpav-dropdown-box.component';
import {animate, state, style, transition, trigger} from '@angular/animations';


export interface NgxDevpavSelectConfig extends NgxDevpavDropdownBoxConfig {
  textUnselectItems: string;
}

@Component({
  selector: 'ngx-devpav-select',
  templateUrl: './ngx-devpav-select.component.html',
  styleUrls: ['./ngx-devpav-select.component.scss'],
  animations: [
    trigger('triggerDropdown', [
      state('close', style({
        overflow: 'hidden',
        opacity: 0.5,
        height: '0px'
      })),
      state('open', style({
        overflow: 'inherit',
        opacity: 1,
        height: '*'
      })),
      transition('close <=> open', animate('0.2s ease-in-out'))
    ])
  ]
})
export class NgxDevpavSelectComponent implements OnInit {
  @ViewChild('dropdown', {static: false}) dropdown: NgxDevpavDropdownBoxComponent;


  stateDropdown = 'close';

  statusDropdown = false;

  selectedItems: any[];

  items = [
    {value: 'value 1'},
    {value: 'value 2'},
    {value: 'value 3'}
  ];

  config: NgxDevpavSelectConfig = {
    isMultiple: true,
    isSearchLine: true,
    keyField: 'id',
    labelField: 'value',
    textUnselectItems: 'Ничего не выбрано',
    textSearchLine: 'Search',
    defaultSearchLine: ''
  };

  constructor() {
  }

  setDropdownState() {
    this.statusDropdown = !this.statusDropdown;
    this.stateDropdown = this.statusDropdown ? 'open' : 'close';
  }

  ngOnInit() {
    this.items = [];
    for (let i = 0; i < 100; i++) {
      this.items.push({value: `value ${i}`});
    }
  }

  getSingleValue(): string {
    return this.selectedItems[0][this.config.labelField];
  }

  deleteSelectedItem(it: any) {
    console.log(it, 'deleteSelectedItem');
    this.dropdown.selection.deselect(it);
  }

  changesSelectedItems($event: any[]) {
    console.log($event);
    this.selectedItems = $event;
  }

  getCurrentArrow() {
    return this.statusDropdown ? 'arrow-down' : 'arrow-up';
  }

  isSingle(): boolean {
    return !!this.selectedItems && this.selectedItems.length > 0 && !this.config.isMultiple;
  }

  isNotSelected(): boolean {
    return !this.selectedItems || this.selectedItems.length === 0;
  }
}
