import { Injectable } from '@angular/core';

import { RealEstatesApiService } from '@api/real-estates-api.service';

import { RealEstate } from './real-estate.model';

@Injectable()
export class ManageRealEstatesService {

  constructor(private apiService: RealEstatesApiService) { }

  fetch() {
    // TODO: get all RealEstate entities
  }

  toggleRealEstate(estate: RealEstate) {
    // TODO toggle selected
  }

}
