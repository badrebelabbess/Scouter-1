import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getPoint(): number {
    return Math.random() * 10;
  }

}
