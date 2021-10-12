import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthApiService } from './auth-api.service';

describe('AuthApiService', () => {

  xit('should TODO', () => {
    expect(true).toEqual(false);
  });

});

// TODO: create geenric helper fn
function createService(): AuthApiService {
  TestBed.configureTestingModule({
    imports: [HttpClientModule]
  });
  const service = TestBed.inject(AuthApiService);
  return service;
}
