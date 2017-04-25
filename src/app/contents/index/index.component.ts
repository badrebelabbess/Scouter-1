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
        console.log(ui.draggable[0].innerHTML);
        console.log(ui.helper);
        const newDiv = ui.helper.clone(false);
        $('#drop').append(newDiv);
      }
    });
  }

  moveHelper() {
    console.log($(this)[0].innerHTML);
    return '<span>' + $(this)[0].innerHTML + '</span>';
  }

}
