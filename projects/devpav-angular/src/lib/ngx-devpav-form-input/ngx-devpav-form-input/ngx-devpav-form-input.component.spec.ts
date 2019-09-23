import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavFormInputComponent} from './ngx-devpav-form-input.component';

describe('NgxDevpavFormInputComponent', () => {
  let component: NgxDevpavFormInputComponent;
  let fixture: ComponentFixture<NgxDevpavFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
