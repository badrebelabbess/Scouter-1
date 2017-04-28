import { Component, OnDestroy, OnInit } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';

import { JsPlumbSingleton } from '../../../singleton/jslumb.singleton';

import { ToolModel } from '../../../models/tool-model';

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
  providers: [LocalStorageService]
})
export class IndexComponent implements OnInit, OnDestroy {

  workspace = true;

  constructor(private ls: LocalStorageService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    // JsPlumbSingleton.getInstance()
    // .registerConnectionType('basic', { anchor: 'Continuous', connector: 'StateMachine' });

    const o = new ToolModel('RSS feed');
    $('#drop').append(o.getToolIstanceElement());
    JsPlumbSingleton.configureNodes('.elt');

    $('span').draggable({
      cursor: 'move',
      delay: 0,
      refreshPositions: true,
      //  revert: true,
      scroll: false,
      containement: '#drop',
      appendTo: '#drop',
      helper: this.moveHelper
    });
    $( '#drop' ).droppable({
      drop: function( event, ui ) {
        const newDiv = ui.helper.clone(false);
        console.log(newDiv);
        $('#drop').append(newDiv);
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

  open(elt: any): void {
    if ( elt.target.classList[1].endsWith('.png') ) {
      this.ls.set('id', elt.target.id);
      this.ls.set('type', elt.target.classList[1]);
      this.reverse();
    }
  }

  reverse(): void {
    this.workspace = !this.workspace;
  }

}
