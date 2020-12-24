import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-avatar',
  templateUrl: './ngx-devpav-avatar.component.html',
  styleUrls: ['./ngx-devpav-avatar.component.scss']
})
export class NgxDevpavAvatarComponent implements OnInit {

  @Input()
  public ngxSrc: string;

  public ngStyle: {
    width: string,
    height: string,
    'border-radius': string;
  } = {
    width: `${100}px`,
    height: `${100}px`,
    'border-radius': `${100 / 2}px`
  };

  @Input()
  public set ngxSize(num: number) {
    if (num) {
      this.ngStyle = {
        width: `${num}px`,
        height: `${num}px`,
        'border-radius': `${num / 2}px`
      };
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
