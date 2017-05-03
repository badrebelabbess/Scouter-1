import { Injectable } from '@angular/core';

import { ToolModel } from '../models/tool-model';

import { JsPlumbSingleton } from '../singleton/jslumb.singleton';

import { ConfigApp } from '../config/config-app';

import $ from 'jquery/dist/jquery';

@Injectable()
export class RestoreElementService {

  private drawnComponents: Array<string> = [];

  getDrawnComponents(): Array<string> {
    console.log(this.drawnComponents);
    return this.drawnComponents;
  }

  constructor() {
    console.log(this.drawnComponents);
  }

  draw(workflow: any): void {
    for (const w of workflow.workflow_components) {
      const o = new ToolModel(w.component_type, w.id, w.x_position, w.y_position);
      this.drawnComponents.push(w.component_type);
      $(ConfigApp.dropContainer).append(o.getToolIstanceElement());
    }
    JsPlumbSingleton.configureNodes(ConfigApp.toolEltsClass);
  }

}
