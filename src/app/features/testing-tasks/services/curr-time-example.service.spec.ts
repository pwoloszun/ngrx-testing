import { TestBed } from '@angular/core/testing';

import { CurrTimeExampleService } from './curr-time-example.service';

describe('CurrTimeExampleService', () => {
  let service: CurrTimeExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrTimeExampleService);
  });

  xit('should TODO', () => {
    expect(true).toEqual(false);
  });
});
