import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlexLineComponent} from './flex-line.component';

describe('FlexLineComponent', () => {
  let component: FlexLineComponent;
  let fixture: ComponentFixture<FlexLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
