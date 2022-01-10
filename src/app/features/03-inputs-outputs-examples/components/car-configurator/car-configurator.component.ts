import { Component, OnInit } from '@angular/core';

import { IOptionPickerOption } from '../option-picker/option-picker.component';

@Component({
  selector: 'nts-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.css']
})
export class CarConfiguratorComponent implements OnInit {

  // TODO
  engines: IOptionPickerOption[] = [
    { id: 100, value: 'Petrol' },
    { id: 200, value: 'Diesel' },
    { id: 300, value: 'Tesla' },
  ];

  colors: IOptionPickerOption[] = [
    { id: 100, value: 'Black' },
    { id: 200, value: 'White' },
    { id: 300, value: 'Red' },
    { id: 400, value: 'Yellow' },

  ];

  driveWheels: IOptionPickerOption[] = [
    { id: 100, value: '4X' },
    { id: 200, value: 'Front-Wheel-Drive' },
    { id: 300, value: 'Rear-Wheel-Drive' },
  ];

  ngOnInit() {
  }
}
