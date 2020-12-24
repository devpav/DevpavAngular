import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavFlopPanelComponent} from './ngx-devpav-flop-panel.component';

describe('NgxDevpavFlopPanelComponent', () => {
  let component: NgxDevpavFlopPanelComponent;
  let fixture: ComponentFixture<NgxDevpavFlopPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavFlopPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavFlopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
