import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavLoaderContainerComponent} from './ngx-devpav-loader-container.component';

describe('NgxDevpavLoaderContainerComponent', () => {
  let component: NgxDevpavLoaderContainerComponent;
  let fixture: ComponentFixture<NgxDevpavLoaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavLoaderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavLoaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
