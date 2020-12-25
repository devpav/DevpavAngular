import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavListComponent} from './ngx-devpav-list.component';

describe('NgxDevpavListComponent', () => {
  let component: NgxDevpavListComponent;
  let fixture: ComponentFixture<NgxDevpavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
