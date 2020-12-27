import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavScheduleEventComponent} from './ngx-devpav-schedule-event.component';

describe('NgxDevpavScheduleEventComponent', () => {
  let component: NgxDevpavScheduleEventComponent;
  let fixture: ComponentFixture<NgxDevpavScheduleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavScheduleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavScheduleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
