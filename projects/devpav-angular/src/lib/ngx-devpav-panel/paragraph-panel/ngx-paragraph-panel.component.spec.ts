import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxParagraphPanelComponent } from './ngx-paragraph-panel.component';

describe('ParagraphPanelComponent', () => {
  let component: NgxParagraphPanelComponent;
  let fixture: ComponentFixture<NgxParagraphPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxParagraphPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxParagraphPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
