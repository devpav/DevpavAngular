import {Injectable} from '@angular/core';

export interface BoardEvent {
  id: string;
  start: Date;
  end: Date;
}


@Injectable({
  providedIn: 'root'
})
export class NgxDevpavCanvasSchedule {

  private _context: CanvasRenderingContext2D;
  private _distanceY: number;
  private _width: number;
  private _height: number;

  public set context(context: CanvasRenderingContext2D) {
    this._context = context;
  }

  public set distanceY(distanceY: number) {
    this._distanceY = distanceY;
  }

  public set width(width: number) {
    console.log(width);
    this._width = width;
  }

  public set height(height: number) {
    this._height = height;
  }

  refresh() {
    this._context.clearRect(0, 0, 4000, 4000);

    this.buildTimeLine();
    this.buildTimeZone();
    this.buildTimeLineY();
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

  private buildTimeLineY = (color: string = 'rgb(123, 123, 123)') => {
    this._context.beginPath();
    this._context.fillStyle = color;

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

  private buildTimeLine = (color: string = 'rgb(2,94,255)') => {
    this._context.beginPath();

    this._context.strokeStyle = color;

    const pointStart = this.calcPoint(new Date(), this._distanceY, this._width);

    this._context.moveTo(pointStart.x, pointStart.y + pointStart.h);
    this._context.lineTo(pointStart.w, pointStart.y + pointStart.h);

    this._context.stroke();

    this._context.closePath();
  }


  private buildEventTime = (event: BoardEvent, color: string = 'rgb(2, 94, 255)') => {
    this._context.beginPath();

    this._context.fillStyle = color;

    const pointStart = this.calcPoint(event.start, this._distanceY, this._width);
    const pointEnd = this.calcPoint(event.end, this._distanceY, this._width);

    this._context.fillRect(pointStart.x, pointStart.y + pointStart.h, this.width,
      (pointEnd.h + pointEnd.y) - (pointStart.y + pointStart.h));

    this._context.closePath();
  }

  private calcPoint(date: Date, distanceY: number, width: number) {
    return {
      x: 40,
      y: (date.getHours() * distanceY) + 5,
      w: width,
      h: ((distanceY) / 60) * date.getMinutes()
    };
  }

}
