import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavSelectComponent} from './ngx-devpav-select.component';

describe('NgxDevpavSelectComponent', () => {
  let component: NgxDevpavSelectComponent;
  let fixture: ComponentFixture<NgxDevpavSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
