import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-icon-list-option',
  templateUrl: './ngx-devpav-icon-list-option.component.html',
  styleUrls: ['./ngx-devpav-icon-list-option.component.scss']
})
export class NgxDevpavIconListOptionComponent implements OnInit {

  public __ngxInitial: string;
  public __ngxTitle: string;

  @Input()
  loading = false;

  @Input()
  ngxSrcAvatar: string;

  @Input()
  public set ngxTitle(value: string) {
    if (value) {
      this.__ngxTitle = value;
      this.__ngxInitial =  value;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
