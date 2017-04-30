import { Component, OnDestroy, OnInit } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { WorkflowService } from '../../../services/workflow.service';
import { RestoreElementService } from '../../../services/restore-element.service';

import { JsPlumbSingleton } from '../../../singleton/jslumb.singleton';

import { ToolModel } from '../../../models/tool-model';

import { ConfigApp } from '../../../config/config-app';

import { Popup } from 'ng2-opd-popup';

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
    private re: RestoreElementService,
    private popup: Popup
  ) {
      this.ws.getDefautWorkFlow()
      .subscribe( resData  => re.draw(resData),
                  resError => this.errorMsg = resError );
      this.ws.sendWorkFlow()
      .subscribe( resData  => console.log('d'),
                  resError => this.errorMsg = resError );
   }

  ngOnInit() {
    console.log('init');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log('after view init');
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
    console.log('destroy');
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
    // $(ConfigApp.dropContainer).html('');
    this.popup.options = {
      header: 'Your custom header',
      color: '#5cb85c', // red, blue....
      widthProsentage: 40, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: 'OK', // The text on your confirm button
      cancleBtnContent: 'Cancel', // the text on your cancel button
      confirmBtnClass: 'btn btn-default', // your class for styling the confirm button
      cancleBtnClass: 'btn btn-default', // you class for styling the cancel button
      animation: 'fadeInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };
    this.popup.show();
  }

}
