import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavButtonStepperComponent} from './ngx-devpav-button-stepper.component';

describe('NgxDevpavButtonSteperComponent', () => {
  let component: NgxDevpavButtonStepperComponent;
  let fixture: ComponentFixture<NgxDevpavButtonStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavButtonStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavButtonStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
