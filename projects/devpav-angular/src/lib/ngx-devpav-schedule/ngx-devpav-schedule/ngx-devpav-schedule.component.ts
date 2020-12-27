import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {NgxDevpavCanvasSchedule, TimeEvent} from '../ngx-devpav-canvas.schedule';


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
  public events: TimeEvent[];

  @Input()
  public startWith: number;

  @Input()
  public endWith: number;

  @Output()
  private timeEventClick = new EventEmitter<TimeEvent>();

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
    if (changes.events) {
      this.ngxCanvasSchedule.events = this.events;
    }
  }

  ngAfterViewInit(): void {
    const cnv = document.getElementById('canvas') as HTMLCanvasElement;
    const panel = cnv.parentElement;

    cnv.addEventListener('click', (event: MouseEvent) => {
      const evn = this.ngxCanvasSchedule.getEvent(event);
      if (evn) {
        const timeEvent = this.events.find(it => it.id === evn);
        if (timeEvent) {
          this.timeEventClick.emit(timeEvent);
        }
      }
    });
    window.addEventListener('resize', () => {
      const clientWidth = panel.getBoundingClientRect().width;
      cnv.width = clientWidth;

      this.ngxCanvasSchedule.context = canvas.getContext('2d');
      this.ngxCanvasSchedule.width = clientWidth;

      this.ngxCanvasSchedule.refresh();
    });

    setInterval(() => {
      this.ngxCanvasSchedule.refresh();
    }, 1000);


    const canvas = this.canvas.nativeElement as HTMLCanvasElement;

    this.ngxCanvasSchedule.context = canvas.getContext('2d');

    canvas.width = panel.getBoundingClientRect().width;

    this.ngxCanvasSchedule.distanceY = this.distanceY;
    this.ngxCanvasSchedule.height = this.height;
    this.ngxCanvasSchedule.width = this.width;
    this.ngxCanvasSchedule.events = this.events;

    this.ngxCanvasSchedule.refresh();
  }

}
