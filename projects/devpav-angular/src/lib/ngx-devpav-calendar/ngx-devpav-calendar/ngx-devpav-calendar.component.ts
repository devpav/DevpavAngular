import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ngx-devpav-calendar',
  templateUrl: './ngx-devpav-calendar.component.html',
  styleUrls: ['./ngx-devpav-calendar.component.scss']
})
export class NgxDevpavCalendarComponent implements OnInit, OnChanges {

  @Input()
  public ngxYear: number;

  @Input()
  public ngxMonth: number;


  dates: Date[];

  constructor() { }

  ngOnInit() {
    this.dates = this.getMonthDays(this.ngxYear, this.ngxMonth);
  }

  getMonthDays(year: number, mouth: number) {
    const systemMonth = mouth - 1;

    const calculate = new Date();

    calculate.setFullYear(year, systemMonth);

    const daysInMonth = new Date(year, mouth + 1, 0).getDate();

    const everyDay: Date[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDay = new Date();
      currentDay.setFullYear(year, systemMonth, i);
      everyDay.push(currentDay);
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
  }

}
