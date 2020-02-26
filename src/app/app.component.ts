import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  
  name = 'Angular 5';
  lat:any;
  lng:any;
  constructor() {  }

  ngOnInit() {
    this.lat = 52.1961472;
    this.lng = 20.9813504;
    // if (navigator) {
    //   navigator.geolocation.getCurrentPosition(pos => {
    //     this.lng = +pos.coords.longitude;
    //     this.lat = +pos.coords.latitude;
    //   });
    // }
  }

}
