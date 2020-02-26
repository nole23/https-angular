import { Component, OnInit } from "@angular/core";
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import Overlay from 'ol/Overlay';

import { fromLonLat } from 'ol/proj';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView
  overLayer: Overlay;

  public geocoder: any;
  public platform: any;

  name = 'Angular 5';
  lat:any;
  lng:any;
  // radius:any;
  // color:any;
  // zoom:any;
  // options: any;
  constructor() { 
    // this.options = [
    //   {
    //     zoom: 8,
    //     radius: 15000,
    //     color: 'red'
    //   },
    //   {
    //     zoom: 10,
    //     radius: 10000,
    //     color: 'red'
    //   },
    //   {

    //   }
    // ]
  }

  ngOnInit() {
    // this.lat = 52.1961472;
    // this.lng = 20.9813504;
    // this.radius = 10000;
    // this.color = '#00c928';
    // this.zoom = 10;
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos)
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.openMap()
      });
    }
  }

  openMap() {
    
    fetch('https://nominatim.openstreetmap.org/reverse?format=json&lon=' + this.lng + '&lat=' + this.lat)
      .then(res => {
        console.log(res)
      })
    console.log('stt');
    this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.layer = new OlTileLayer({
      source: this.source,
      stopEvent: false,
    });
    
    this.view = new OlView({
      center: fromLonLat([19.8433925, 45.2408411]),
      zoom: 15.75
    });
    
    this.map = new OlMap({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });
    console.log(this.map.overlayContainerStopEvent_.style.removeProperty('position'))
  }

}
