import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavPanelContentComponent} from './ngx-devpav-panel-content.component';

describe('NgxDevpavPanelContentComponent', () => {
  let component: NgxDevpavPanelContentComponent;
  let fixture: ComponentFixture<NgxDevpavPanelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavPanelContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavPanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
