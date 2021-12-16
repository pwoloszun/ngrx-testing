import { Component, OnInit } from '@angular/core';
import { IOptionPickerOption } from '../option-picker/option-picker.component';

@Component({
  selector: 'nts-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.css']
})
export class CarConfiguratorComponent implements OnInit {

  // TODO
  engines = [
    { id: 1, value: 'Petrol' },
    { id: 2, value: 'Diesel' },
    { id: 3, value: 'Tesla' },
  ];

  colors = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'White' },
    { id: 3, value: 'Red' },
    { id: 4, value: 'Yellow' },
  ];
  driveWheels = [
    { id: 11, value: '4X' },
    { id: 12, value: 'Front-Wheel-Drive' },
    { id: 13, value: 'Rear-Wheel-Drive' },
  ];

  selectedEngine: IOptionPickerOption | null = null;

  engineSelectHandler(engine: IOptionPickerOption) {
    this.selectedEngine = engine;
  }

  ngOnInit() {
  }
}
