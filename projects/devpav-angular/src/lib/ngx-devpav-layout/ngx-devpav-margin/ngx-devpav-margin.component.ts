import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-margin',
  templateUrl: './ngx-devpav-margin.component.html',
  styleUrls: ['./ngx-devpav-margin.component.scss']
})
export class NgxDevpavMarginComponent implements OnInit {

  margin = {
    'margin-top': '0px',
    'margin-left': '0px',
    'margin-right': '0px',
    'margin-bottom': '0px',
  };

  @Input()
  set top(value: number) {
    if (value) {
      this.margin['margin-top'] = `${value}px`;
    }
  }

  @Input()
  set right(value: number) {
    if (value) {
      this.margin['margin-right'] = `${value}px`;
    }
  }

  @Input()
  set bottom(value: number) {
    if (value) {
      this.margin['margin-bottom'] = `${value}px`;
    }
  }

  @Input()
  set left(value: number) {
    if (value) {
      this.margin['margin-left'] = `${value}px`;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
