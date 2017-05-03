import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { WorkflowService } from '../../../services/workflow.service';
import { RestoreElementService } from '../../../services/restore-element.service';

import { JsPlumbSingleton } from '../../../singleton/jslumb.singleton';

import { ToolModel } from '../../../models/tool-model';

import { ConfigApp } from '../../../config/config-app';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

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

  componentChoosen: string;
  @ViewChild('modal')
  modal: ModalComponent;
  @ViewChild('modal2')
  modal2: ModalComponent;
  defaultWorkflow: any;
  errorMsg: string;
  drawnComponents: Array<string>;

  constructor(
    private ls: LocalStorageService,
    private ws: WorkflowService,
    private re: RestoreElementService
  ) {
      this.ws.getDefautWorkFlow()
      .subscribe( function(resData) {
                    this.drawnComponents = [];
                    this.defaultWorkflow = resData;
                    re.draw(resData);
                    for (const w of this.defaultWorkflow.workflow_components) {
                      this.drawnComponents.push(w.component_type);
                    }
                  },
                  resError => this.errorMsg = resError );
      this.ws.sendWorkFlow()
      .subscribe( resData  => console.log('d'),
                  resError => this.errorMsg = resError );
      this.componentChoosen = '';
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
  }

  private moveHelper(): HTMLDivElement {
    // if ( this.drawnComponents.indexOf($(this)[0].innerHTML) !== -1 ) {
    //   return null;
    // }
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
    if ( this.componentChoosen !== 'sentimental-analysis.png'
        && this.componentChoosen !== 'topic-extraction.png' ) {
      this.modal.open();
    } else {
      this.modal2.open();
    }
  }

  private apply(evt: any): void {
    if ( evt.target.classList[1] !== undefined ) {
      this.ls.set(ConfigApp.localStorage.id, evt.target.id);
      this.ls.set(ConfigApp.localStorage.type, evt.target.classList[1]);
      this.componentChoosen = evt.target.classList[1];
    } else {
      this.ls.set(ConfigApp.localStorage.id, evt.target.parentElement.id);
      this.ls.set(ConfigApp.localStorage.type, evt.target.parentElement.classList[1]);
      this.componentChoosen = evt.target.parentElement.classList[1];
    }
  }

  notify(): void {
    this.modal.close();
  }

  deleteAll(): void {
    $(ConfigApp.dropContainer).html('');
  }

  close(): void {
    this.modal.close();
    this.modal2.close();
  }

  delete(): void {
    $('#' + this.ls.get(ConfigApp.localStorage.id)).remove();
    this.modal.close();
    this.modal2.close();
  }

}
