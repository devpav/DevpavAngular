import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ButtonType} from '../../theme.config';

@Component({
  selector: 'ngx-devpav-button',
  templateUrl: './ngx-devpav-button.component.html',
  styleUrls: ['./ngx-devpav-button.component.scss']
})
export class NgxDevpavButtonComponent implements OnInit, OnChanges {

  @Input()
  public title: string;

  @Input()
  public ngxColor: ButtonType = 'DEFAULT';

  @Output()
  public mouseEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
