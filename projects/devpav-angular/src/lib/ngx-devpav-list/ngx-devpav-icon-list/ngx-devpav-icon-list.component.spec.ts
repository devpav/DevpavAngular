import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavIconListComponent} from './ngx-devpav-icon-list.component';

describe('NgxDevpavIconListComponent', () => {
  let component: NgxDevpavIconListComponent;
  let fixture: ComponentFixture<NgxDevpavIconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavIconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
