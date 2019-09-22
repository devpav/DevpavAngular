import { TestBed } from '@angular/core/testing';

import { DevpavAngularService } from './devpav-angular.service';

describe('DevpavAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevpavAngularService = TestBed.get(DevpavAngularService);
    expect(service).toBeTruthy();
  });
});
