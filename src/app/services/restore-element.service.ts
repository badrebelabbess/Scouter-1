import { Injectable } from '@angular/core';

import { ToolModel } from '../models/tool-model';

import { JsPlumbSingleton } from '../singleton/jslumb.singleton';

import $ from 'jquery/dist/jquery';

@Injectable()
export class RestoreElementService {

  constructor() { }

  draw(workflow: any): void {
    console.log(workflow);
    const o = new ToolModel('RSS feed', 'AAAZ');
    $('#drop').append(o.getToolIstanceElement());
    JsPlumbSingleton.configureNodes('.elt');
  }

}
