import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-devpav-button-stepper',
  templateUrl: './ngx-devpav-button-stepper.component.html',
  styleUrls: ['./ngx-devpav-button-stepper.component.scss']
})
export class NgxDevpavButtonStepperComponent implements OnInit {

  @Output()
  public prev: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public next: EventEmitter<void> = new EventEmitter<void>();


  @Input()
  public middleValue;


  constructor() { }

  ngOnInit() {
  }

}
