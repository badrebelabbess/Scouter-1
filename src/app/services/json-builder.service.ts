import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';

import { ConfigApp } from '../config/config-app';

@Injectable()
export class JsonBuilderService {

  constructor() { }

  constructJson(): any {
    const json = {};
    const ls = new LocalStorageService({
      prefix: 'app-root',
      storageType: 'localStorage'
    });
    json['boundingBox'] = ls.get(ConfigApp.boundingBox);
    json['resourceName'] = 'v';
    json['keywords'] = ls.get(ConfigApp.keywords);
    const dataSources = {};
    if ( ls.get(ConfigApp.dataSources[0]) ) {
      dataSources['DBPedia'] = ls.get(ConfigApp.dataSources[0]);
    }
    if ( ls.get(ConfigApp.dataSources[1]) ) {
      dataSources['Twitter'] = ls.get(ConfigApp.dataSources[1]);
    }
    if ( ls.get(ConfigApp.dataSources[2]) ) {
      dataSources['Facebook'] = ls.get(ConfigApp.dataSources[2]);
    }
    if ( ls.get(ConfigApp.dataSources[3]) ) {
      dataSources['OpenAgenda'] = ls.get(ConfigApp.dataSources[3]);
    }
    if ( ls.get(ConfigApp.dataSources[4]) ) {
      dataSources['owm'] = ls.get(ConfigApp.dataSources[4]);
    }
    if ( ls.get(ConfigApp.dataSources[5]) ) {
      dataSources['RSS'] = ls.get(ConfigApp.dataSources[5]);
    }
    if ( ls.get(ConfigApp.dataSources[6]) ) {
      dataSources['Eventful'] = ls.get(ConfigApp.dataSources[6]);
    }
    json['dataSources'] = dataSources;
    return json;
  }

}
