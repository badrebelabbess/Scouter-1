import { Component, OnInit } from '@angular/core';

import { JsPlumbSingleton } from '../../../singleton/jslumb.singleton';

import { DBPediaModel } from '../../../models/dbpedia-model';

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
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  private static type = '.png';

  workspace = true;

  constructor() { }

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
    console.log(elt.path[0].classList);
    console.log(elt.path[0].id);
    // let o = new DBPediaModel(0.0, '2017-04-01', 'b');
    this.workspace = !this.workspace;
  }

}
