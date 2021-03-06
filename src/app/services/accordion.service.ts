import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AccordionService {

  private accordionsMonitoringUrl = 'assets/data/accordion-monitoring.json';

  constructor(private http: Http) { }

  getAccordionsMonitoring() {
      return this.http.get(this.accordionsMonitoringUrl)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
      console.error(error);
      return Observable.throw(error || 'Server Error');
  }
}
