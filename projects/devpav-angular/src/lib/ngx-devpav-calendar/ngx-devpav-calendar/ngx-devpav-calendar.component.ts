import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ngx-devpav-calendar',
  templateUrl: './ngx-devpav-calendar.component.html',
  styleUrls: ['./ngx-devpav-calendar.component.scss']
})
export class NgxDevpavCalendarComponent implements OnInit, OnChanges {

  public days: string[] = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресение'
  ];

  @Input()
  public ngxYear: number;

  @Input()
  public ngxMonth: number;


  dates: Date[];
  spans: number[];

  constructor() { }

  ngOnInit() {
    this.dates = this.getMonthDays(this.ngxYear, this.ngxMonth);
    this.spans = this.getSpan(this.dates);
  }

  getMonthDays(year: number, mouth: number) {
    const systemMonth = mouth - 1;

    const calculate = new Date(year, mouth, 0);

    const daysInMonth = calculate.getDate();

    const everyDay: Date[] = [];

    console.log(daysInMonth);
    for (let i = 1; i <= daysInMonth; i++) {
      everyDay.push(new Date(year, systemMonth, i));
    }

    return everyDay;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ngxYaer && changes) {
      const year = changes.ngxYaer.currentValue;
      this.dates = this.getMonthDays(year, this.ngxMonth);
    }
    if (changes.ngxMonth) {
      const month = changes.ngxMonth.currentValue;
      this.dates = this.getMonthDays(this.ngxYear, month);
    }
    this.spans = this.getSpan(this.dates);
  }


  getSpan(dates: Date[]): number[] {
    if (!dates[0]) { return [0]; }

    const spans = dates[0].getDay();
    const numbers = [];

    for (let i = 1; i < spans; i++) {
      numbers.push(i);
    }

    console.log(spans, dates[0]);

    return numbers;
  }

}
