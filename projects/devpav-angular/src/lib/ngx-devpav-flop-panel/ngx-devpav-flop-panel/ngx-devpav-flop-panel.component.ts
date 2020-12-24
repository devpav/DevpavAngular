import {Component, Input, OnInit} from '@angular/core';
import {dropdownAnimation} from '../../ngx-devpav-animations/dropdown-animation';

@Component({
  selector: 'ngx-devpav-flop-panel',
  templateUrl: './ngx-devpav-flop-panel.component.html',
  styleUrls: ['./ngx-devpav-flop-panel.component.scss'],
  animations: [
    dropdownAnimation
  ]
})
export class NgxDevpavFlopPanelComponent implements OnInit {

  flopState = 'close';

  @Input()
  public title: string;

  @Input()
  public set ngxOpened(value: boolean) {
    this.flopState = value ? 'open' : 'close';
  }

  constructor() { }

  ngOnInit() {
  }

  setDropdownState() {
    console.log(this.flopState);
    this.flopState = this.flopState === 'close' ? 'open' : 'close';
  }

  isUnFlopped(): boolean {
    return this.flopState === 'close';
  }

}
