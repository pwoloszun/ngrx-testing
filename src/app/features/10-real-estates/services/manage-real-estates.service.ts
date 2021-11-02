import { Injectable } from '@angular/core';

import { RealEstatesApiService } from '@api/real-estates-api.service';

import { RealEstate } from './real-estate.model';

@Injectable()
export class ManageRealEstatesService {

  realEstates: RealEstate[] = [];

  selectedRealEstate: RealEstate | null = null;

  constructor(private apiService: RealEstatesApiService) { }

  fetch(): void {
    this.apiService.getAll().subscribe((data) => {
      this.realEstates = data;
      this.selectedRealEstate = null;
    });
  }

  toggleRealEstate(estate: RealEstate) {
    if (this.selectedRealEstate === estate) {
      this.selectedRealEstate = null;
    } else {
      this.selectedRealEstate = estate;
    }
  }

}
