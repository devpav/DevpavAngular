import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavPaddingComponent} from './ngx-devpav-padding.component';

describe('NgxDevpavPaddingComponent', () => {
  let component: NgxDevpavPaddingComponent;
  let fixture: ComponentFixture<NgxDevpavPaddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavPaddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
