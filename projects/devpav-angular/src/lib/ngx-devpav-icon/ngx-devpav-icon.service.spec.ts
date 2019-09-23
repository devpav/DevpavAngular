import {TestBed} from '@angular/core/testing';

import {NgxDevpavIconService} from './ngx-devpav-icon.service';

describe('NgxDevpavIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDevpavIconService = TestBed.get(NgxDevpavIconService);
    expect(service).toBeTruthy();
  });
});
