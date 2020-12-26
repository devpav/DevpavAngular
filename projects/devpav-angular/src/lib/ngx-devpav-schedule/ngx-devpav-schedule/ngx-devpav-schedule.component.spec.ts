import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavScheduleComponent} from './ngx-devpav-schedule.component';

describe('NgxDevpavScheduleComponent', () => {
  let component: NgxDevpavScheduleComponent;
  let fixture: ComponentFixture<NgxDevpavScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
