import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgxDevpavIconService} from '../ngx-devpav-icon.service';

@Component({
  selector: 'ngx-devpav-icon',
  templateUrl: './ngx-devpav-icon.component.html',
  styleUrls: ['./ngx-devpav-icon.component.scss']
})
export class NgxDevpavIconComponent implements OnInit, AfterViewInit {

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
    const iconConfig = { fill: this.fill, height: this.height, width: this.width };
    this.contentIcon = this.ngxDevpavIconService.getIcon(this.name, iconConfig);
    this.element.nativeElement.innerHTML = this.contentIcon;

    if (this.fill) {
      this.element.nativeElement.style = `fill: ${this.fill}`;
    }
  }

}
