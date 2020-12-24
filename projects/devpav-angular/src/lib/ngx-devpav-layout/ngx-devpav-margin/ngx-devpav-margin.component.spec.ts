import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavMarginComponent} from './ngx-devpav-margin.component';

describe('NgxDevpavMarginComponent', () => {
  let component: NgxDevpavMarginComponent;
  let fixture: ComponentFixture<NgxDevpavMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
