import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavSingletonSelectorComponent} from './ngx-devpav-singleton-selector.component';

describe('NgxDevpavSingletonSelecorComponent', () => {
  let component: NgxDevpavSingletonSelectorComponent;
  let fixture: ComponentFixture<NgxDevpavSingletonSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavSingletonSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavSingletonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
