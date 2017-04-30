import { Component, OnDestroy, OnInit } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { WorkflowService } from '../../../services/workflow.service';
import { RestoreElementService } from '../../../services/restore-element.service';

import { JsPlumbSingleton } from '../../../singleton/jslumb.singleton';

import { ToolModel } from '../../../models/tool-model';

import { ConfigApp } from '../../../config/config-app';

// Import Jquery
import $ from 'jquery/dist/jquery';
// Import jQuery UI to drag and drop
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/draggable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [
    LocalStorageService,
    WorkflowService,
    RestoreElementService
  ]
})
export class IndexComponent implements OnInit, OnDestroy {

  workspace = true;
  defaultWorkflow: any;
  errorMsg: string;

  constructor(
    private ls: LocalStorageService,
    private ws: WorkflowService,
    private re: RestoreElementService
  ) {
      this.ws.getDefautWorkFlow()
      .subscribe( resData  => re.draw(resData),
                  resError => this.errorMsg = resError );
      this.ws.sendWorkFlow()
      .subscribe( resData  => console.log('d'),
                  resError => this.errorMsg = resError );
   }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    // JsPlumbSingleton.getInstance()
    // .registerConnectionType('basic', { anchor: 'Continuous', connector: 'StateMachine' });
    $(ConfigApp.draggableSelector).draggable({
      cursor: ConfigApp.draggableConfig.cursor,
      delay: ConfigApp.draggableConfig.delay,
      refreshPositions: ConfigApp.draggableConfig.refreshPositions,
      scroll: ConfigApp.draggableConfig.scroll,
      containement: ConfigApp.draggableConfig.containement,
      appendTo: ConfigApp.draggableConfig.appendTo,
      helper: this.moveHelper
    });
    $(ConfigApp.dropContainer).droppable({
      drop: function( event, ui ) {
        const newDiv = ui.helper.clone(false);
        $(ConfigApp.dropContainer).append(newDiv);
        JsPlumbSingleton.initNode(newDiv);
      }
    });
  }

  ngOnDestroy(): void {
    console.log('dddddddddd');
  }

  private moveHelper(): HTMLDivElement {
    return new ToolModel($(this)[0].innerHTML).getToolIstanceElement();
  }

  open(evt: any): void {
    try {
      if ( evt.target.classList[1].endsWith(ConfigApp.imageType)) {
        this.apply(evt);
      }
    } catch (e) {
      if ( evt.path[1].classList[1].endsWith(ConfigApp.imageType)) {
        this.apply(evt);
      }
    }
  }

  private apply(evt: any): void {
    this.ls.set(ConfigApp.localStorage.id, evt.target.id);
    this.ls.set(ConfigApp.localStorage.type, evt.target.classList[1]);
    this.reverse();
  }

  reverse(): void {
    this.workspace = !this.workspace;
  }

  deleteAll(): void {
    $(ConfigApp.dropContainer).html('');
  }

}
