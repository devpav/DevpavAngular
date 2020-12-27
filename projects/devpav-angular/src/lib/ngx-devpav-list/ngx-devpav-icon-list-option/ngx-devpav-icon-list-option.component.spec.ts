import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavIconListOptionComponent} from './ngx-devpav-icon-list-option.component';

describe('NgxDevpavIconListOptionComponent', () => {
  let component: NgxDevpavIconListOptionComponent;
  let fixture: ComponentFixture<NgxDevpavIconListOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavIconListOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavIconListOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
