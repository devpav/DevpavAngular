import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LibDescriptionComponent} from './lib-description.component';

describe('LibDescriptionComponent', () => {
  let component: LibDescriptionComponent;
  let fixture: ComponentFixture<LibDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
