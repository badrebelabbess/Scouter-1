import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private result = 'http://localhost:9091/rmes/concepts/result';

  constructor(private http: Http) { }

  getPoint(): number {
    return Math.random() * 10;
  }

  getDefautWorkFlow() {
      return this.http.get(this.result)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }

  getData() {
      return this.http.get(this.result)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
      console.error(error);
      return Observable.throw(error || 'Server Error');
  }

}
