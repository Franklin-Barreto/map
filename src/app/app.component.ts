/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location, Appearance, MatGoogleMapsAutocompleteComponent } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { Occurrence } from './shared/occurrence';
import { MapService } from './shared/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'mapa';

  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  public country: string;
  city = { latitude: 53.350140, longitude: -6.266155 };
  occurrences: Occurrence[];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private mapService: MapService) {
    this.mapService.getOccurrences().subscribe(occurrences => {
      this.occurrences = occurrences;
    });
  }

  ngOnInit() {
    MatGoogleMapsAutocompleteComponent
    this.zoom = 10;
    this.latitude = 53.350140;
    this.longitude = -6.266155;

    this.setCurrentPosition();

  }



  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAddressSelected(result: PlaceResult) {
    console.log('onAddressSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }
}
