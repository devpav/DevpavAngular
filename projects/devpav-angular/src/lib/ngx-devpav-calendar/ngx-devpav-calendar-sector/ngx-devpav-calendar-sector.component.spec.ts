import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavCalendarSectorComponent} from './ngx-devpav-calendar-sector.component';

describe('NgxDevpavCalendarSectorComponent', () => {
  let component: NgxDevpavCalendarSectorComponent;
  let fixture: ComponentFixture<NgxDevpavCalendarSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavCalendarSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavCalendarSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
