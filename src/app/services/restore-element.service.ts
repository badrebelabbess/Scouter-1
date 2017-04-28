import { Injectable } from '@angular/core';

import { ToolModel } from '../models/tool-model';

import { JsPlumbSingleton } from '../singleton/jslumb.singleton';

import { ConfigApp } from '../config/config-app';

// Import Jquery
import $ from 'jquery/dist/jquery';

@Injectable()
export class RestoreElementService {

  constructor() { }

  draw(workflow: any): void {
    for (const w of workflow.workflow_components) {
      const o = new ToolModel(w.component_type, w.id, w.x_position, w.y_position);
      $(ConfigApp.dropContainer).append(o.getToolIstanceElement());
      JsPlumbSingleton.configureNodes(ConfigApp.toolEltsClass);
    }

  }

}
