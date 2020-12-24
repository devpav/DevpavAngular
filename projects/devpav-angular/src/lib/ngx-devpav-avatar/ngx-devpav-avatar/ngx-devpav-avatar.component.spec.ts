import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDevpavAvatarComponent} from './ngx-devpav-avatar.component';

describe('NgxDevpavAvatarComponent', () => {
  let component: NgxDevpavAvatarComponent;
  let fixture: ComponentFixture<NgxDevpavAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDevpavAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevpavAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
