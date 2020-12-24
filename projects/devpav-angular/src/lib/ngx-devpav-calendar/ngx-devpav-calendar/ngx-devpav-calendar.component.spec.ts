import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavCalendarComponent} from './ngx-devpav-calendar.component';

describe('NgxDevpavCalendarComponent', () => {
  let component: NgxDevpavCalendarComponent;
  let fixture: ComponentFixture<NgxDevpavCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
