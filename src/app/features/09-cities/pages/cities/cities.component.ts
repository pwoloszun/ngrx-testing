import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LatLng } from '@shared/leaflet-map/viewmodels/lat-lng.interface';
import { CITIES_DATA } from '../../data/cities-data';

@Component({
  selector: 'nts-cities',
  templateUrl: './cities.component.html',
})
export class CitiesComponent implements OnInit {

  cities$ = of(CITIES_DATA).pipe(
    delay(2000)
  );
  selectedCity: LatLng | null = null;

  ngOnInit() {
  }

  onPlaceClick(city: any) {
    console.log('google map PAGE click:', city);
    if (this.selectedCity === city) {
      this.selectedCity = null;
    } else {
      this.selectedCity = city;
    }
  }
}
