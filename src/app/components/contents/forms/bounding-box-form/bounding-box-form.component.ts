import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-bounding-box-form',
  templateUrl: './bounding-box-form.component.html',
  styleUrls: ['./bounding-box-form.component.scss']
})
export class BoundingBoxFormComponent {

  /*
	 * This is a specification of the leaflet options
	 * The reason to duplicate this object is so we can easily render it to the template
	 */
  optionsSpec: {
  layers: any[],
  zoom: number,
  center: number[]
  } = {
  layers: [
    {
      url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
      maxZoom: 18,
      attribution: 'Open Cycle Map'
    },
    {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      maxZoom: 18,
      attribution: 'Open Street Map'
    },
  ],
  zoom: 5,
  center: [ 46.879966, -121.726909 ]
  };

  zoom: number;
  center: L.LatLng;

	/*
	 * This are the leaflet map options that we're going to use for input binding
	 */

  options = {
    layers: this.optionsSpec.layers.map((l) => {
      return L.tileLayer(l.url, { maxZoom: l.maxZoom, attribution: l.attribution });
    }),
    zoom: this.optionsSpec.zoom,
    center: L.latLng({ lat: this.optionsSpec.center[0], lng: this.optionsSpec.center[1] })
  };

  fitBoundsOptions = {
    padding: 100,
    maxZoom: 10,
    animate: true,
    duration: 1
  };

  panOptions = {
    animate: true,
    duration: 1
  };

  zoomOptions = {
    animate: true,
    duration: 1
  };

  zoomPanOptions = {
    animate: true,
    duration: 1
  };

  drawOptions = {
      draw: {
        polygon: false,
        polyline: false,
        marker: false,
        circle: false
      },
  };
}
