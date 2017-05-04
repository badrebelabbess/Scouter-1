import { Injectable } from '@angular/core';

import { ToolModel } from '../models/tool-model';

import { JsPlumbSingleton } from '../singleton/jslumb.singleton';

import { ConfigApp } from '../config/config-app';

import $ from 'jquery/dist/jquery';

@Injectable()
export class RestoreElementService {

  static dc: Array<string>;

  constructor() {
  }

  draw(workflow: any): void {
    RestoreElementService.dc = null;
    RestoreElementService.dc = new Array<string>();
    for (const w of workflow.workflow_components) {
      const o = new ToolModel(w.component_type, w.id, w.x_position, w.y_position);
      RestoreElementService.dc.push(w.component_type);
      $(ConfigApp.dropContainer).append(o.getToolIstanceElement());
    }
    JsPlumbSingleton.configureNodes(ConfigApp.toolEltsClass);
  }

  static getDrawnComponents(): Array<string> {
    return RestoreElementService.dc;
  }

  static addToDrawnComponents(elt: string) {
    RestoreElementService.dc.push(elt);
  }

  static deleteFromDrawnComponents(elt: string) {
    const index = RestoreElementService.dc.indexOf(elt);
    RestoreElementService.dc.splice(
      index, index + 1 
    );
  }

  static deleteAllDrawnComponents(elt: string) {
    RestoreElementService.dc.splice(0);
  }

}
