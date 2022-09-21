import { TestBed } from '@angular/core/testing';

import { PrimericaService } from './primerica.service';

describe('PrimericaService', () => {
  let service: PrimericaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimericaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
