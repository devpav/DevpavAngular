import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-panel-paragraph',
  templateUrl: './ngx-paragraph-panel.component.html',
  styleUrls: ['./ngx-paragraph-panel.component.scss']
})
export class NgxParagraphPanelComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
