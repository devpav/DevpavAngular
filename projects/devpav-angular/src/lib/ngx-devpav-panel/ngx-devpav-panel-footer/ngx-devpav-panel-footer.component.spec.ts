import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavPanelFooterComponent} from './ngx-devpav-panel-footer.component';

describe('NgxDevpavPanelFooterComponent', () => {
  let component: NgxDevpavPanelFooterComponent;
  let fixture: ComponentFixture<NgxDevpavPanelFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavPanelFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavPanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
