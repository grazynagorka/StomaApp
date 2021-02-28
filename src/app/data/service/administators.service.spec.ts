import { TestBed } from '@angular/core/testing';

import { AdministatorsService } from './administators.service';

describe('AdministatorsService', () => {
  let service: AdministatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
