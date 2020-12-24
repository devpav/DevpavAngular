import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavPanelHeaderComponent} from './ngx-devpav-panel-header.component';

describe('NgxDevpavPanelHeaderComponent', () => {
  let component: NgxDevpavPanelHeaderComponent;
  let fixture: ComponentFixture<NgxDevpavPanelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavPanelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
