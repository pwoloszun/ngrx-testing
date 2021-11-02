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
import { forEach } from 'lodash';

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
export class LeafletMapComponent<T extends LatLng> implements AfterViewInit, OnChanges {

  @Input() geoObjects: LatLng[] | null = null;
  @Input() selected: LatLng | null = null;
  @Output() markerClick = new EventEmitter<LatLng>();


  @ViewChild('mapCont')
  private divCont!: ElementRef<HTMLDivElement>;

  private map: MapViewModel | null = null;
  private markers: MarkerViewModel[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (this.map && changes.geoObjects && !changes.geoObjects.isFirstChange()) {
      this.renderMarkers();
    }

    if (changes.selected && !changes.selected.isFirstChange()) {
      this.highlightSelected();
    }
  }

  ngAfterViewInit() {
    const divDomEl = this.divCont.nativeElement;
    this.map = new MapViewModel(divDomEl);
  }

  private renderMarkers() {
    this.markers = this.geoObjects!.map((singleGeoObj: LatLng) => {
      const marker = this.map!.createMarker(singleGeoObj);
      marker.on('click', (geoObj) => {
        this.markerClick.emit(geoObj);
      });
      return marker;
    });
  }

  private highlightSelected() {
    this.markers.forEach((marker) => {
      const isHighlighted = marker.matches(this.selected);
      marker.setHighlight(isHighlighted);
    });
  }
}
