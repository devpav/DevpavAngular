import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavIconComponent} from './ngx-devpav-icon.component';

describe('NgxDevpavIconComponent', () => {
  let component: NgxDevpavIconComponent;
  let fixture: ComponentFixture<NgxDevpavIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
