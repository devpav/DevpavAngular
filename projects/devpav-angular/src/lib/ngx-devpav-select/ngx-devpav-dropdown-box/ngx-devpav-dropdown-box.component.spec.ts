import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavDropdownBoxComponent} from './ngx-devpav-dropdown-box.component';

describe('NgxDevpavDropdownBoxComponent', () => {
  let component: NgxDevpavDropdownBoxComponent;
  let fixture: ComponentFixture<NgxDevpavDropdownBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavDropdownBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavDropdownBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
