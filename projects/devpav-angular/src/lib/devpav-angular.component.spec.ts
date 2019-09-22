import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevpavAngularComponent } from './devpav-angular.component';

describe('DevpavAngularComponent', () => {
  let component: DevpavAngularComponent;
  let fixture: ComponentFixture<DevpavAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
