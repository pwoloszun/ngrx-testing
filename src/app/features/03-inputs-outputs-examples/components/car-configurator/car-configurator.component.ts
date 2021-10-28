import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.css']
})
export class CarConfiguratorComponent implements OnInit {

  selectedEngine: string | null = null;
  engines = ['Petrol', 'Diesel', 'Tesla'];

  selectedColor: string | null = null;
  colors = ['Black', 'White', 'Red', 'Yellow'];

  selectedDriveWheel: string | null = null;
  driveWheels = ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'];

  selectEngine(engine: string) {
    console.log('selectEngine(engine)', engine);
    this.selectedEngine = engine;
  }

  selectColor($event: string) {
    console.log('color', $event);
    this.selectedColor = $event;
  }

  selectDriveWheel($event: string) {
    this.selectedDriveWheel = $event;
  }

  ngOnInit() {
  }
}
