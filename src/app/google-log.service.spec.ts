import { TestBed } from '@angular/core/testing';

import { GoogleLogService } from './google-log.service';

describe('GoogleLogService', () => {
  let service: GoogleLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
