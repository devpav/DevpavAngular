import {Injectable} from '@angular/core';

export interface TimeEvent {
  id: string;
  name: string;
  description?: string;
  start: Date;
  end: Date;
}

export interface EventPosition {
  xS: number;
  yS: number;
  xE: number;
  yE: number;
}


@Injectable({
  providedIn: 'root'
})
export class NgxDevpavCanvasSchedule {


  public set context(context: CanvasRenderingContext2D) {
    this._context = context;
  }

  public set events(events: TimeEvent[]) {
    this._events = events;
  }

  public set distanceY(distanceY: number) {
    this._distanceY = distanceY;
  }

  public set width(width: number) {
    this._width = width;
  }

  public set height(height: number) {
    this._height = height;
  }

  private _context: CanvasRenderingContext2D;
  private _distanceY: number;
  private _width: number;
  private _height: number;

  private _events: TimeEvent[] = [];

  private eventPosition: Map<string, EventPosition> = new Map<string, EventPosition>();

  private static calcPoint(date: Date, distanceY: number, width: number) {
    return { x: 40, y: (date.getHours() * distanceY) + 5, w: width, h: ((distanceY) / 60) * date.getMinutes() };
  }

  refresh() {
    this._context.clearRect(0, 0, 5000, 5000);

    this.buildTimeLine();
    this.buildTimeZone();
    this.buildTimeLineY();

    this._events.forEach(event => this.buildTimeEvent(event));
  }

  private buildTimeZone = (color: string = 'rgba(232,232,232,0.81)') => {
    this._context.beginPath();
    this._context.strokeStyle = color;

    for (let i = 0; i <= 24; i++) {
      const moveToY = ((i * this._distanceY) + 5);
      this._context.moveTo(40, moveToY);
      this._context.lineTo(this._width, moveToY);
    }

    this._context.stroke();
    this._context.closePath();
  }

  private buildTimeLineY = (color: string = 'rgb(52, 52, 52)') => {
    this._context.beginPath();
    this._context.fillStyle = color;
    this._context.font = '12px serif';

    for (let i = 0; i <= 24; i++) {
      const moveToY = (i * this._distanceY) + 10;
      if (i === 0 || i === 24) {
        this._context.fillText(`00:00`, 0, moveToY);
        continue;
      }

      const hour = i < 10 ? `0${i}` : i.toString();

      this._context.fillText(`${hour}:00`, 0, moveToY);
    }
    this._context.closePath();
  }

  private buildLineY = (color: string = 'rgb(123, 123, 123)', fontSize: number = 12) => {
    this._context.beginPath();
    this._context.font = `${fontSize}px serif`;
    this._context.strokeStyle = color;
    this._context.moveTo(40, 0);
    this._context.lineTo(40, (24 * this._distanceY) + 15);
    this._context.stroke();
    this._context.closePath();
  }

  private buildTimeLine = (color: string = 'rgb(232,34,83)') => {
    this._context.beginPath();

    this._context.strokeStyle = color;

    const pointStart = NgxDevpavCanvasSchedule.calcPoint(new Date(), this._distanceY, this._width);

    this._context.moveTo(pointStart.x, pointStart.y + pointStart.h);
    this._context.lineTo(pointStart.w, pointStart.y + pointStart.h);

    this._context.stroke();

    this._context.closePath();
  }

  public buildTimeEvent = (event: TimeEvent, color: string = '#2196f3') => {
    this._context.beginPath();

    this._context.fillStyle = color;

    const pointStart = NgxDevpavCanvasSchedule.calcPoint(event.start, this._distanceY, this._width);
    const pointEnd = NgxDevpavCanvasSchedule.calcPoint(event.end, this._distanceY, this._width);

    const yS = pointStart.y + pointStart.h;
    const yE = pointEnd.h + pointEnd.y;

    this._context.fillRect(pointStart.x, yS, this._width, yE - yS);

    const eventPosition = {xE: this._width, xS: pointStart.x, yE, yS};

    this.eventPosition.set(event.id, eventPosition);

    this.buildTimeEventName(event);

    this._context.closePath();
  }

  private buildTimeEventName = (timeEvent: TimeEvent) => {
    if (!this.eventPosition.has(timeEvent.id)) {
      return;
    }

    this._context.beginPath();

    this._context.font = '12px serif';
    this._context.fillStyle = 'rgb(255,255,255)';

    const eventPosition = this.eventPosition.get(timeEvent.id);

    const startY = (Math.ceil(eventPosition.yE - eventPosition.yS) / 2) + 4;

    this._context.fillText(timeEvent.name, eventPosition.xS + 15, eventPosition.yS + startY);

    this._context.closePath();
  }

  getEvent(mouseEvent: MouseEvent) {
    let event = null;
    this.eventPosition.forEach((value, key, map) => {
      const isEvent = value.yS <= mouseEvent.offsetY
        && value.yE >= mouseEvent.offsetY
        && mouseEvent.offsetX >= value.xS && mouseEvent.offsetX <= value.xE;

      if (isEvent) {
        event = key;
        return;
      }
    });

    return event;
  }

}
