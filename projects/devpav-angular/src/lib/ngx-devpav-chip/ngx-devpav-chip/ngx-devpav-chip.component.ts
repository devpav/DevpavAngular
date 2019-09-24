import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ngx-devpav-chip',
  templateUrl: './ngx-devpav-chip.component.html',
  styleUrls: ['./ngx-devpav-chip.component.scss'],
  animations: [
    trigger('activeAnimation',
      [
        state('inactive', style({ opacity: '0', display: 'none' })),
        state('active', style({ opacity: '1' })),

        transition('inactive => active', [
          style({ display: 'block' }),
          animate('50ms ease-in')
        ]),

        transition('active => inactive', [
          animate('50ms ease-in')
        ])
      ])
  ]
})
export class NgxDevpavChipComponent implements OnInit {

  @ViewChild('chip', { static: false }) chip: ElementRef<any>;

  stateVisible = 'inactive';

  @Input()
  icon = 'remove';

  @Input()
  hiddenIcon = false;

  @Output()
  eventClickIcon = new EventEmitter<any>();
  @Output()
  eventClickChip = new EventEmitter<any>();

  @Input()
  id: string;

  @Input()
  value: string;

  constructor() { }

  mouseover($event: MouseEvent) {
    if (!this.hiddenIcon) {
      this.stateVisible = 'active';
    }
  }

  mouseout($event: MouseEvent) {
    this.stateVisible = 'inactive';
  }

  handlerClickIcon($event: MouseEvent) {
    $event.stopPropagation();
    this.eventClickIcon.emit(this.id);
  }

  handlerClickChip($event: MouseEvent) {
    this.eventClickChip.emit(this.id);
  }

  ngOnInit(): void {
  }
}
