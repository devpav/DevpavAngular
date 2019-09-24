import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavChipComponent} from './ngx-devpav-chip.component';

describe('NgxDevpavChipComponent', () => {
  let component: NgxDevpavChipComponent;
  let fixture: ComponentFixture<NgxDevpavChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
