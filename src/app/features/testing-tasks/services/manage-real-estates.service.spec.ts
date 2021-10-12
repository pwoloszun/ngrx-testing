import { TestBed } from '@angular/core/testing';

import { ManageRealEstatesService } from './manage-real-estates.service';

describe('ManageRealEstatesService', () => {
  let service: ManageRealEstatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageRealEstatesService);
  });

  xit('should TODO', () => {
    expect(true).toEqual(false);
  });
});
