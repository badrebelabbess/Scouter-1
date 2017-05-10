import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';

import { ConfigApp } from '../config/config-app';

@Injectable()
export class JsonBuilderService {

  constructor() { }

  launch(): void {
    const ls = new LocalStorageService({
      prefix: 'app-root',
      storageType: 'localStorage'
    });
    console.log(ls.get('facebook'));
  }

}
