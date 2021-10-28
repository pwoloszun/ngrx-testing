import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { MapViewModel } from './viewmodels/map.vm';
import { LatLng } from './viewmodels/lat-lng.interface';
import { OnChanges, SimpleChanges } from '@angular/core';
import { MarkerViewModel } from './viewmodels/marker.vm';

// TODO 1a: @ViewChild('gggHhh') myEl: ElementRef;
// TODO 1b: map = new MapViewModel(this.myEl.nativeElement);

// TODO 2a: const marker: Marker = map.createMarker(singleGeoObj);
// TODO 2b: ngOnChanges(changes: SimpleChanges)

// TODO 3: marker.on('click', function(obj: LatLng) { ... })


@Component({
  selector: 'nts-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent<T extends LatLng>  {

}
