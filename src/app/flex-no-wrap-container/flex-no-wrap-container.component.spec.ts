import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlexNoWrapContainerComponent} from './flex-no-wrap-container.component';

describe('FlexNoWrapContainerComponent', () => {
  let component: FlexNoWrapContainerComponent;
  let fixture: ComponentFixture<FlexNoWrapContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexNoWrapContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexNoWrapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
