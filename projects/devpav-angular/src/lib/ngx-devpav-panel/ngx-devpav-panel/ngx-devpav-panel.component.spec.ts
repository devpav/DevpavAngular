import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavPanelComponent} from './ngx-devpav-panel.component';

describe('NgxDevpavPanelComponent', () => {
  let component: NgxDevpavPanelComponent;
  let fixture: ComponentFixture<NgxDevpavPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
