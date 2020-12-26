import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {NgxDevpavCanvasSchedule} from '../ngx-devpav-canvas.schedule';


@Component({
  selector: 'ngx-devpav-schedule',
  templateUrl: './ngx-devpav-schedule.component.html',
  styleUrls: ['./ngx-devpav-schedule.component.scss']
})
export class NgxDevpavScheduleComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('scheduleCanvas', {static: true})
  canvas: ElementRef;

  @ViewChild('container', {static: false})
  container: ElementRef;

  @Input()
  public distanceY = 35;

  @Input()
  public events: Event[];

  @Input()
  public width = 1000;

  public height = this.distanceY * 25;

  constructor(private ngxCanvasSchedule: NgxDevpavCanvasSchedule) {
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.distanceY) {
      this.height = changes.distanceY.currentValue * 25;
    }
  }

  ngAfterViewInit(): void {
    const cnv = document.getElementById('canvas') as HTMLCanvasElement;
    const panel = cnv.parentElement;



    window.addEventListener('resize', () => {
      const clientWidth = panel.getBoundingClientRect().width;
      cnv.width = clientWidth;
      this.ngxCanvasSchedule.context = canvas.getContext('2d');
      this.ngxCanvasSchedule.width = clientWidth;

      this.ngxCanvasSchedule.refresh();
    });

    const canvas = this.canvas.nativeElement as HTMLCanvasElement;

    this.ngxCanvasSchedule.context = canvas.getContext('2d');

    canvas.width = panel.getBoundingClientRect().width;
    this.ngxCanvasSchedule.distanceY = this.distanceY;
    this.ngxCanvasSchedule.height = this.height;
    this.ngxCanvasSchedule.width = this.width;

    this.ngxCanvasSchedule.refresh();
  }

}
