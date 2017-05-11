import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';

import { ConfigApp } from '../../../../config/config-app';

import { BoundingBoxModel } from '../../../../models/bounding-box-model';

import * as L from 'leaflet';

@Component({
  selector: 'app-bounding-box-form',
  templateUrl: './bounding-box-form.component.html',
  styleUrls: ['./bounding-box-form.component.scss']
})
export class BoundingBoxFormComponent {

  private bounds: BoundingBoxModel = new BoundingBoxModel();

  @Output()
  notify = new EventEmitter();

  constructor(
    private ls: LocalStorageService
  ) { }

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
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      maxZoom: 18,
      attribution: 'Open Street Map'
    }
  ],
  zoom: 5,
  center: [ 48.8048649, 2.120355399999994 ]
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

  onMapReady(map: L.Map) {
    let l = this.ls;
    let b = new BoundingBoxModel();
    map.on('draw:created', function(e: any){
      try {
        const bounds = e.layer._bounds;
        b.setMinLat(bounds._southWest.lat);
        b.setMaxLat(bounds._northEast.lat);
        b.setMinLong(bounds._southWest.lng);
        b.setMaxLong(bounds._northEast.lng);
        // const id = l.get(ConfigApp.localStorage.id);
        // const type = l.get(ConfigApp.localStorage.type);
        let type = l.get(ConfigApp.localStorage.type) + '';
        type = type.replace(ConfigApp.imageType, '');
        // l.set(id + ConfigApp.separator + type, b.getModel());
        l.set(type, b.getModel());
      } catch ( ex ) { }
    });

    map.on('draw:edited', function(e: any){
      try {
        const key = Object.keys(e.layers._layers)[0];
        const bounds = e.layers._layers[key]._bounds;
        b.setMinLat(bounds._southWest.lat);
        b.setMaxLat(bounds._northEast.lat);
        b.setMinLong(bounds._southWest.lng);
        b.setMaxLong(bounds._northEast.lng);
        // const id = l.get(ConfigApp.localStorage.id);
        // const type = l.get(ConfigApp.localStorage.type);
        let type = l.get(ConfigApp.localStorage.type) + '';
        type = type.replace(ConfigApp.imageType, '');
        // l.set(id + ConfigApp.separator + type, b.getModel());
        l.set(type, b.getModel());
      } catch ( ex ) { }
    });

    map.on('draw:deleted', function(e: any){
    });
  }

  save() {
    this.notify.emit();
  }

}
