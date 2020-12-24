import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'devpav-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
