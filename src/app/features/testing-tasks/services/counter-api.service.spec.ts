import { HttpClientModule } from '@angular/common/http';
import { createService } from 'src/test/utils/create-service';

import { CounterApiService } from './counter-api.service';

describe('CounterApiService', () => {

  it('should create service instance', () => {
    const service = createService(CounterApiService, {
      imports: [HttpClientModule]
    });

    expect(service).toBeDefined();
  });

  xit('should TODO', () => {
    expect(true).toEqual(false);
  });

});
