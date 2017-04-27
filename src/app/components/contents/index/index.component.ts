import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';

import { JsPlumbSingleton } from '../../../singleton/jslumb.singleton';

// Import Jquery
import $ from 'jquery/dist/jquery';
// Import jQuery UI to drag and drop
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/draggable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';

declare var jsPlumb: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [LocalStorageService]
})
export class IndexComponent implements OnInit {

  private static type = '.png';

  workspace = true;

  constructor(private ls: LocalStorageService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
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
        const i = JsPlumbSingleton.getInstance();
        const newDiv = ui.helper.clone(false);
        i.registerConnectionType('basic', { anchor: 'Continuous', connector: 'StateMachine' });
        $('#drop').append(newDiv);
        JsPlumbSingleton.initNode(newDiv);
      }
    });
  }

  private moveHelper(): string {
    const elt = $(this)[0].innerHTML;
    const pic = elt.replace(/ /g, '-').toLowerCase() + IndexComponent.type;
    return '<div class="elt ' + pic + '">' +
              '<img src="assets/images/' + pic + '"/ class="anchor-out">' +
              '<p>' + elt + '</p>' +
            '</div>';
  }

  open(elt: any): void {
    console.log(elt);
    console.log(elt.target);
    console.log(elt.target.classList);
    console.log(elt.target.id);
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
