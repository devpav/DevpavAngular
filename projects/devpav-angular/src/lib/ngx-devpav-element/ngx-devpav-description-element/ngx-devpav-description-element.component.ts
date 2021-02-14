import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-description-element',
  templateUrl: './ngx-devpav-description-element.component.html',
  styleUrls: ['./ngx-devpav-description-element.component.scss']
})
export class NgxDevpavDescriptionElementComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  value: string;

  constructor() { }

  ngOnInit() {
  }

}
