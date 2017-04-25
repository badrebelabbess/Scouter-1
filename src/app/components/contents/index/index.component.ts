import { Component, OnInit } from '@angular/core';

// Import Jquery
import $ from 'jquery/dist/jquery';
// Import jQuery UI to drag and drop
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/draggable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';

import { JsPlumbSingleton } from '../../../singleton/jslumb.singleton';
import 'jsplumb/dist/css/jsplumbtoolkit-defaults.css';
declare var jsPlumb: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

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
      helper: this.moveHelper
    });
    $( '#drop' ).droppable({
      drop: function( event, ui ) {
        const i = JsPlumbSingleton.getInstance();
        const newDiv = ui.helper.clone(false);
        i.registerConnectionType('basic', { anchor: 'Continuous', connector: 'StateMachine' });
        i.getSelector('.elt');
        i.draggable( newDiv, { containment: true });
        $('#drop').append(newDiv);

        // Make the div able to be draggable line from
      i.makeSource(newDiv, {
          filter: '.anchor-out',
          anchor: 'Continuous',
          connectorStyle: { stroke: '#0073CF', strokeWidth: 2, outlineStroke: 'transparent', outlineWidth: 4 },
          connectionType: 'basic',
          connectorHoverStyle: {
            strokeWidth: 3,
            stroke: '#1e8151'
        },
      });
      // Make the div able to be draggable line to
      i.makeTarget(newDiv, {
          dropOptions: { hoverClass: 'dragHover' },
          anchor: 'Continuous',
          connectorStyle: { stroke: '#0073CF', strokeWidth: 2, outlineStroke: 'transparent', outlineWidth: 4 },
          connectionType: 'basic',
          extract: {
              'action': 'the-action'
          },
          allowLoopback: false
      });

      }
    });
  }

  moveHelper() {
    return '<span class="elt">' + $(this)[0].innerHTML + '</span>';
  }

}
