import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-padding',
  templateUrl: './ngx-devpav-padding.component.html',
  styleUrls: ['./ngx-devpav-padding.component.scss']
})
export class NgxDevpavPaddingComponent implements OnInit {

  padding = {
    'padding-top': '0px',
    'padding-left': '0px',
    'padding-right': '0px',
    'padding-bottom': '0px'
  };

  @Input()
  set top(value: number) {
    if (value) {
      this.padding['padding-top'] = `${value}px`;
    }
  }

  @Input()
  set right(value: number) {
    if (value) {
      this.padding['padding-right'] = `${value}px`;
    }
  }

  @Input()
  set bottom(value: number) {
    if (value) {
      this.padding['padding-bottom'] = `${value}px`;
    }
  }

  @Input()
  set left(value: number) {
    if (value) {
      this.padding['padding-left'] = `${value}px`;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
