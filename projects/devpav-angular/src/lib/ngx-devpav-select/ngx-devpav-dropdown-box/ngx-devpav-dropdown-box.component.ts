import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ngx-devpav-dropdown-box',
  templateUrl: './ngx-devpav-dropdown-box.component.html',
  styleUrls: ['./ngx-devpav-dropdown-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDevpavDropdownBoxComponent implements OnInit {

  values = [];
  searchLine: string;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.values.push({ value: `value ${i}`});
    }
  }

}
