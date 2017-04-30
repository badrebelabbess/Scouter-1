import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestMethod, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WorkflowService {

  private defaultWorkflowUrl = 'src/app/data/default-workflow.json';

  private sendingWorkflowUrl = 'config';

  constructor(private http: Http) { }

  getDefautWorkFlow() {
      return this.http.get(this.defaultWorkflowUrl)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }

  sendWorkFlow() {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
      return this.http.get(this.sendingWorkflowUrl, {
        method: RequestMethod.Get,
        headers: headers,
        // body: JSON.stringify({a: 'b'}),
        body: '{"a": "b"}',
        responseType: ResponseContentType.Json
      }).map((response: Response) => response.json())
        .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
      console.error(error);
      return Observable.throw(error || 'Server Error');
  }

}
