import { TestBed } from '@angular/core/testing';

import { StockingSignupSubmitService } from './stocking-signup-submit.service';

describe('StockingSignupSubmitService', () => {
  let service: StockingSignupSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockingSignupSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
