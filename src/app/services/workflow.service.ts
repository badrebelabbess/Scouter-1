import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestMethod, ResponseContentType, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import $ from 'jquery/dist/jquery';

@Injectable()
export class WorkflowService {

  private defaultWorkflowUrl = 'src/app/data/default-workflow.json';

  private sendingWorkflowUrl = 'http://localhost:8081/config';
  // private sendingWorkflowUrl = 'http://localhost:9091/rmes/concepts/config';

  constructor(private http: Http) { }

  getDefautWorkFlow() {
      return this.http.get(this.defaultWorkflowUrl)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }

  sendWorkFlow(json: any) {
      const headers = new Headers({
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json'
      });

      const params = new URLSearchParams();
      params.set('jsonData', JSON.stringify(json));

      return this.http.post(this.sendingWorkflowUrl, json, {
        method: RequestMethod.Post,
        url: this.sendingWorkflowUrl,
        headers: headers,
        body: JSON.stringify(json),
        responseType: ResponseContentType.Json,
        params: params
      }).map((response: Response) => response.json())
        .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
      console.error(error);
      return Observable.throw(error || 'Server Error');
  }

}
