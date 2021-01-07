import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-devpav-avatar',
  templateUrl: './ngx-devpav-avatar.component.html',
  styleUrls: ['./ngx-devpav-avatar.component.scss']
})
export class NgxDevpavAvatarComponent implements OnInit {

  @Input()
  public ngxSrc: string;

  @Input()
  public set ngxBackground(value: string) {
    this.ngxStyleAvatarInitial.background = value;
  }

  @Input()
  public set ngxColor(value: string) {
    this.ngxStyleAvatarInitial.color = value;
  }

  public ngStyle: {
    width: string,
    height: string,
    'border-radius': string;
    'font-size': string;
  } = {
    width: `${100}px`,
    height: `${100}px`,
    'border-radius': `${100 / 2}px`,
    'font-size': ''
  };

  public ngxStyleAvatarInitial = {
    background: 'none',
    color: 'black',
    ...this.ngStyle
  };

  @Input()
  public set ngxSize(num: number) {
    if (num) {
      this.ngStyle = {
        width: `${num}px`,
        height: `${num}px`,
        'border-radius': `${num / 2}px`,
        'font-size': `${num / 2.7}px`
      };

      this.ngxStyleAvatarInitial = {
        ...this.ngxStyleAvatarInitial,
        ...this.ngStyle
      };
    }
  }

  public __initial: string;

  @Input()
  public set initial(value: string) {
    const stringValues = value.split(' ');

    let initial = '';
    for (let i = 0; i < stringValues.length; i++) {
      initial += stringValues[i].trim().charAt(0).toUpperCase();

      if (i > 1) {
        break;
      }
    }

    this.__initial =  initial;
  }


  constructor() { }

  ngOnInit() {
  }

}
