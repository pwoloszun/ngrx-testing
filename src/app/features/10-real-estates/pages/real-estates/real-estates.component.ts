import { Component, OnInit } from '@angular/core';

import { MetaData } from '@shared/data-table/meta-data';

import { ManageRealEstatesService } from '../../services/manage-real-estates.service';

@Component({
  selector: 'nts-real-estates',
  templateUrl: './real-estates.component.html',
  styleUrls: ['./real-estates.component.css']
})
export class RealEstatesComponent implements OnInit {

  listHeaders: MetaData[] = [
    { value: 'street', text: 'Ulica' },
    { value: 'lat', text: 'Wysokosc geo.' },
    { value: 'lng', text: 'Dlugosc geo.' },
  ];

  constructor(public manageService: ManageRealEstatesService) { }

  ngOnInit() {
    this.manageService.fetch();
  }

  onRealEstateClick(realEstate: any) {
    console.log('RE clicked:', realEstate);
    this.manageService.toggleRealEstate(realEstate);
  }

}
