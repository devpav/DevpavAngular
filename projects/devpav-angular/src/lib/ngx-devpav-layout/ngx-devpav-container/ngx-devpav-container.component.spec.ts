import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavContainerComponent} from './ngx-devpav-container.component';

describe('NgxDevpavContainerComponent', () => {
  let component: NgxDevpavContainerComponent;
  let fixture: ComponentFixture<NgxDevpavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
