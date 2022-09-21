import { TestBed } from '@angular/core/testing';

import { AuthentiateService } from './authentiate.service';

describe('AuthentiateService', () => {
  let service: AuthentiateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentiateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
