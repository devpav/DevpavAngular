import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavListOptionComponent} from './ngx-devpav-list-option.component';

describe('NgxDevpavListOptionComponent', () => {
  let component: NgxDevpavListOptionComponent;
  let fixture: ComponentFixture<NgxDevpavListOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavListOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavListOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
