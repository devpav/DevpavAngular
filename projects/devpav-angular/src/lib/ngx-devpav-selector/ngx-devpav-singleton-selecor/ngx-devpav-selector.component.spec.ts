import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavSelectorComponent} from './ngx-devpav-selector.component';

describe('NgxDevpavSingletonSelecorComponent', () => {
  let component: NgxDevpavSelectorComponent;
  let fixture: ComponentFixture<NgxDevpavSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
