import {AfterContentInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'ngx-devpav-form-input',
  templateUrl: './ngx-devpav-form-input.component.html',
  styleUrls: ['./ngx-devpav-form-input.component.scss']
})
export class NgxDevpavFormInputComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges {

  @Input() ph: string;
  @Input() type = 'text';

  @Input() value: string;

  @Input() debounce: number = 0;

  debouncer: Subject<string> = new Subject<string>();

  @Output() blurEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() focusEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() inputValue: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(this.debounce))
      .subscribe((value) => this.inputValue.emit(value));
  }

  blurInput($event: boolean) {
    this.blurEmit.emit($event);
  }

  focusInput($event: boolean) {
    this.focusEmit.emit($event);
  }

  setValue() {
    this.debouncer.next(this.value);
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  ngAfterContentInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.debounce) {
      const debounce = changes.debounce.currentValue;
    }
  }

}
