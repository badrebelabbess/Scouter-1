import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { JsonBuilderService } from '../../../services/json-builder.service';
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
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
  providers: [
    JsonBuilderService,
    LocalStorageService,
    WorkflowService,
    RestoreElementService
  ]
})
export class WorkflowComponent implements OnInit, OnDestroy {

  componentChoosen = '';
  @ViewChild('modal')
  modal: ModalComponent;
  @ViewChild('modal2')
  modal2: ModalComponent;
  defaultWorkflow: any;
  errorMsg: string;

  constructor(
    private jb: JsonBuilderService,
    private ls: LocalStorageService,
    private ws: WorkflowService,
    private re: RestoreElementService
  ) {
      this.ws.getDefautWorkFlow()
      .subscribe( function(resData) {
                    this.defaultWorkflow = resData;
                    re.draw(resData);
                  },
                  resError => this.errorMsg = resError );
   }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
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
    const elt: string = $(this)[0].innerHTML;
    console.log(elt);
    console.log(RestoreElementService.getDrawnComponents());
    if ( RestoreElementService.getDrawnComponents().indexOf(elt.toLowerCase()) !== -1 ) {
      return null;
    }
    RestoreElementService.addToDrawnComponents(elt.toLowerCase());
    console.log(new ToolModel(elt).getToolIstanceElement());
    return new ToolModel(elt).getToolIstanceElement();
  }

  open(evt: any): void {
    try {
      if ( evt.target.classList[1].endsWith(ConfigApp.imageType)) {
        this.apply(evt);
      }
    } catch (e) {
      if ( evt.target.parentElement.classList[1].endsWith(ConfigApp.imageType)) {
        this.apply(evt);
      }
    }
    if ( this.componentChoosen !== 'sentimental-analysis.png'
        && this.componentChoosen !== 'topic-extraction.png'
        && this.componentChoosen !== 'sink.png' ) {
      this.modal.open();
    } else {
      if ( this.componentChoosen === 'sink.png' ) {
        this.ws.sendWorkFlow(this.jb.constructJson())
        .subscribe( resData  => console.log('d'),
                  resError => this.errorMsg = resError );
      } else {
        this.modal2.open();
      }
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
    for (const e of $(ConfigApp.dropContainer).children()) {
      JsPlumbSingleton.getInstance().remove(e);
      RestoreElementService.deleteAllDrawnComponents();
    }
    for (const e of this.ls.keys()) {
      this.ls.remove(e);
    }
  }

  close(): void {
    this.modal.close();
    this.modal2.close();
  }

  delete(): void {
    JsPlumbSingleton.getInstance().remove( $('#' + this.ls.get(ConfigApp.localStorage.id)) );
    let type = this.ls.get(ConfigApp.localStorage.type) + '';
    type = type.replace(ConfigApp.imageType, '');
    this.ls.remove(type);
    this.modal.close();
    this.modal2.close();
    RestoreElementService.deleteFromDrawnComponents(
      this.ls.get(ConfigApp.localStorage.type)
    );
  }

}
