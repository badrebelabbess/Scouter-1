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
      RestoreElementService.dc.push(
        w.component_type.toLowerCase());
      $(ConfigApp.dropContainer).append(o.getToolIstanceElement());
    }
    JsPlumbSingleton.configureNodes(ConfigApp.toolEltsClass);
    this.connectDefaultWorkflow(workflow);
  }

  private connectDefaultWorkflow( defaultWorkflow: any ) {
    // Iterate each component
    for ( let i = 0 ; i < defaultWorkflow.workflow_components.length ; i++ ) {
      // Read the current component information from json
      const currentComponent = defaultWorkflow.workflow_components[i];
      const currentComponentId = currentComponent.id;
      const sourceComponentType = currentComponent.component_type;
      const linkComponentIds = currentComponent.links_to;
      for ( let j = 0 ; j < linkComponentIds.length ; j++ ) {
        // Get every link component information
        const linkComponent = defaultWorkflow.workflow_components[ linkComponentIds[j] ];
        const linkComponentType = linkComponent.component_type;

        const sourceId = currentComponentId;
        const targetId = linkComponentIds[j];
        this.connectTwoComponents(sourceId, sourceComponentType, targetId, linkComponentType);
      }
    }
  }

private connectTwoComponents( sourceId: string, sourceType: string , targetId: string, targetType: string ){
    JsPlumbSingleton.getInstance().connect({
        source: sourceId,
        target: targetId,
        Endpoint: ConfigApp.jsPlumbInstanceConfig.Endpoint,
        HoverPaintStyle: ConfigApp.jsPlumbInstanceConfig.HoverPaintStyle,
        ConnectionOverlays: ConfigApp.jsPlumbInstanceConfig.ConnectionOverlays,
        anchor: ConfigApp.jsPlumbMakeSourceConfig.anchor,
        connectorStyle: ConfigApp.connectorStyle,
        connectionType: ConfigApp.jsPlumbMakeSourceConfig.connectionType,
        connectorHoverStyle: ConfigApp.jsPlumbMakeSourceConfig.connectorHoverStyle,
        connector: ConfigApp.jsPlumbInstanceConfig.Connector,
        endpointStyle: ConfigApp.jsPlumbInstanceConfig.Endpoint,
        paintStyle: ConfigApp.connectorStyle
    });
}

  static getDrawnComponents(): Array<string> {
    return RestoreElementService.dc;
  }

  static addToDrawnComponents(elt: string) {
    RestoreElementService.dc.push(elt);
  }

  static deleteFromDrawnComponents(elt: any) {
    console.log(elt);
    try {
      elt = elt.replace(/-/g, ' ');
    } catch (e) {}
    try {
      elt = elt.replace('.png', '');
    } catch (e) {}
    const index = RestoreElementService.dc.indexOf(elt);
    RestoreElementService.dc.splice(
      index, 1 
    );
  }

  static deleteAllDrawnComponents() {
    RestoreElementService.dc.splice(0);
  }

}
