import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-panel-header',
  templateUrl: './ngx-devpav-panel-header.component.html',
  styleUrls: ['./ngx-devpav-panel-header.component.scss']
})
export class NgxDevpavPanelHeaderComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
