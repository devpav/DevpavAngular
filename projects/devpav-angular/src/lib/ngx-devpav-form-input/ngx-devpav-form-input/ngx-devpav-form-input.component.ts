import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-devpav-form-input',
  templateUrl: './ngx-devpav-form-input.component.html',
  styleUrls: ['./ngx-devpav-form-input.component.scss']
})
export class NgxDevpavFormInputComponent implements OnInit {

  @Input() ph: string;
  @Input() type = 'text';

  @Input() value: string;

  @Output() blurEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() focusEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() inputValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  blurInput($event: boolean) {
    this.blurEmit.emit($event);
  }

  focusInput($event: boolean) {
    this.focusEmit.emit($event);
  }

  setValue() {
    this.inputValue.emit(this.value);
  }

}
