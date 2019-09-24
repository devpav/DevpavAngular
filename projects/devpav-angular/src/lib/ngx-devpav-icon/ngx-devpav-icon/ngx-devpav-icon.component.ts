import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {NgxDevpavIconService} from '../ngx-devpav-icon.service';

@Component({
  selector: 'ngx-devpav-icon',
  templateUrl: './ngx-devpav-icon.component.html',
  styleUrls: ['./ngx-devpav-icon.component.scss']
})
export class NgxDevpavIconComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('icon', { static: false }) element: ElementRef;

  @Input()
  name: string;

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  fill: string;

  contentIcon: string;

  constructor(private ngxDevpavIconService: NgxDevpavIconService) {
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.setElementIcon();
    if (this.fill) {
      this.element.nativeElement.style = `fill: ${this.fill}`;
    }
  }

  setElementIcon = () => {
    const iconConfig = { fill: this.fill, height: this.height, width: this.width };
    this.contentIcon = this.ngxDevpavIconService.getIcon(this.name, iconConfig);
    if (this.element) {
      this.element.nativeElement.innerHTML = this.contentIcon;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.name) {
          this.setElementIcon();
      }
      if (changes.fill) {
        if (this.fill && this.element) {
          this.element.nativeElement.style = `fill: ${this.fill}`;
        }
      }
    }
  }

}
