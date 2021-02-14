import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDevpavDescriptionElementComponent } from './ngx-devpav-description-element.component';

describe('NgxDevpavDescriptionElementComponent', () => {
  let component: NgxDevpavDescriptionElementComponent;
  let fixture: ComponentFixture<NgxDevpavDescriptionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavDescriptionElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavDescriptionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
