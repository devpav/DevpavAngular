import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'devpav-lib-description',
  templateUrl: './lib-description.component.html',
  styleUrls: ['./lib-description.component.scss']
})
export class LibDescriptionComponent implements OnInit {

  @Input()
  description: string;

  constructor() { }

  ngOnInit() {
  }

}
