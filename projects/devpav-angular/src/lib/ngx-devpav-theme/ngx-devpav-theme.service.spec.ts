import {TestBed} from '@angular/core/testing';

import {NgxDevpavThemeService} from './ngx-devpav-theme.service';

describe('DevpavAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDevpavThemeService = TestBed.get(NgxDevpavThemeService);
    expect(service).toBeTruthy();
  });
});
