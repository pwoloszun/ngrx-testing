import { Injectable } from '@angular/core';

import { RealEstatesApiService } from '@api/real-estates-api.service';

import { RealEstate } from './real-estate.model';

@Injectable()
export class ManageRealEstatesService {

  realEstates!: any[];

  selectedRealEstate: any;

  constructor(private apiService: RealEstatesApiService) { }

  fetch(): void {
    // TODO: get all RealEstate entities
    this.apiService.getAll().subscribe(() => {
      //TODO
    });
  }

  toggleRealEstate(estate: RealEstate) {
    // TODO toggle selected
  }

}
