import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavButtonComponent} from './ngx-devpav-button.component';

describe('NgxDevpavButtonComponent', () => {
  let component: NgxDevpavButtonComponent;
  let fixture: ComponentFixture<NgxDevpavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
