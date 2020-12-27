import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-icon-list-option',
  templateUrl: './ngx-devpav-icon-list-option.component.html',
  styleUrls: ['./ngx-devpav-icon-list-option.component.scss']
})
export class NgxDevpavIconListOptionComponent implements OnInit {

  @Input()
  loading: boolean = false;

  @Input()
  ngxSrcAvatar: string;

  @Input()
  ngxTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
