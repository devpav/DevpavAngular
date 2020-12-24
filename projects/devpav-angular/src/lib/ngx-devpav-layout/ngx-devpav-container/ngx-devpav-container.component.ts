import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ngx-devpav-container',
  templateUrl: './ngx-devpav-container.component.html',
  styleUrls: ['./ngx-devpav-container.component.scss']
})
export class NgxDevpavContainerComponent implements OnInit, OnChanges {


  constructor() { }

  @Input()
  public ngxXs: number;

  @Input()
  public ngxSm: number;

  @Input()
  public ngxMd: number;


  @Input()
  public ngxLg: number;

  private static changeSize(value: number, type: 'xs' | 'sm' | 'md' | 'lg') {
    if (!value) { return; }
    document.documentElement.style.setProperty(`--ngx-container-${type}`, `${value}px`);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ngxSm) {
      NgxDevpavContainerComponent.changeSize(changes.ngxSm.currentValue as number, 'sm');
    }
    if (changes.ngxXs) {
      NgxDevpavContainerComponent.changeSize(changes.ngxXs.currentValue as number, 'xs');
    }
    if (changes.ngxMd) {
      NgxDevpavContainerComponent.changeSize(changes.ngxMd.currentValue as number, 'md');
    }
    if (changes.ngxLg) {
      NgxDevpavContainerComponent.changeSize(changes.ngxLg.currentValue as number, 'lg');
    }
  }
}
