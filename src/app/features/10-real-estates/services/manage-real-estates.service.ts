import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RealEstatesApiService } from '@api/real-estates-api.service';

import { RealEstate } from './real-estate.model';

@Injectable()
export class ManageRealEstatesService {

  selectedRealEstate$ = new BehaviorSubject<RealEstate | null>(null);
  realEstates$ = new BehaviorSubject<RealEstate[]>([]);

  constructor(private apiService: RealEstatesApiService) {
  }

  fetch() {
    this.reset();
    this.apiService.getAll().subscribe((realEstates: RealEstate[]) => {
      this.realEstates$.next(realEstates);
    });
  }

  toggleRealEstate(estate: RealEstate) {
    if (this.selectedRealEstate$.value === estate) {
      this.reset();
    } else {
      this.selectedRealEstate$.next(estate);
    }
  }

  private reset() {
    this.selectedRealEstate$.next(null);
  }
}
