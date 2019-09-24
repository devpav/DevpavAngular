import {Component, OnInit} from '@angular/core';
import {NgxDevpavDropdownBox} from '../ngx-devpav-dropdown-box/ngx-devpav-dropdown-box.component';

@Component({
  selector: 'ngx-devpav-select',
  templateUrl: './ngx-devpav-select.component.html',
  styleUrls: ['./ngx-devpav-select.component.scss']
})
export class NgxDevpavSelectComponent implements OnInit {

  items = [
    {value: 'value 1'},
    {value: 'value 2'},
    {value: 'value 3'}
  ];

  configDropdown: NgxDevpavDropdownBox = {
    isMultiple: true,
    isSearchLine: true
  };

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 100; i++) {
      this.items.push({value: `value ${i}`});
    }
  }

}
