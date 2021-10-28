import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.css']
})
export class CarConfiguratorComponent implements OnInit {

  // TODO
  engines = ['Petrol', 'Diesel', 'Tesla'];
  colors = ['Black', 'White', 'Red', 'Yellow'];
  driveWheels = ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'];

  ngOnInit() {
  }
}
