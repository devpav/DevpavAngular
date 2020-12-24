import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavPanelSectionComponent} from './ngx-devpav-panel-section.component';

describe('NgxDevpavPanelSectionComponent', () => {
  let component: NgxDevpavPanelSectionComponent;
  let fixture: ComponentFixture<NgxDevpavPanelSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavPanelSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavPanelSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
