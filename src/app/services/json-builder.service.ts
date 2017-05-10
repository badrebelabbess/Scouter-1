import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';

import { ConfigApp } from '../config/config-app';

@Injectable()
export class JsonBuilderService {

  constructor() { }

  launch(): void {
    let json = {};
    const ls = new LocalStorageService({
      prefix: 'app-root',
      storageType: 'localStorage'
    });
    json['boundingBox'] = ls.get(ConfigApp.boundingBox);
    json['resourceName'] = 'v';
    json['keywords'] = ls.get(ConfigApp.keywords);
    let dataSources = {};
    if ( ls.get(ConfigApp.dataSources[0]) !== undefined ) {
      dataSources['DBPedia'] = ls.get(ConfigApp.dataSources[0]);
    }
    if ( ls.get(ConfigApp.dataSources[1]) !== undefined ) {
      dataSources['Twitter'] = ls.get(ConfigApp.dataSources[1]);
    }
    if ( ls.get(ConfigApp.dataSources[2]) !== undefined ) {
      dataSources['Facebook'] = ls.get(ConfigApp.dataSources[2]);
    }
    if ( ls.get(ConfigApp.dataSources[3]) !== undefined ) {
      dataSources['OpenAgenda'] = ls.get(ConfigApp.dataSources[3]);
    }
    if ( ls.get(ConfigApp.dataSources[4]) !== undefined ) {
      dataSources['owm'] = ls.get(ConfigApp.dataSources[4]);
    }
    if ( ls.get(ConfigApp.dataSources[5]) !== undefined ) {
      dataSources['RSS'] = ls.get(ConfigApp.dataSources[5]);
    }
    json['dataSources'] = dataSources;
    console.log(json);
  }

}
