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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // $('div').draggable();
    $('span').draggable({
      cursor: 'move',
      revert: true
    });
    $( '#droppable' ).droppable({
      classes: {
        'ui-droppable-active': 'ui-state-active',
        'ui-droppable-hover': 'ui-state-hover'
      },
      drop: function( event, ui ) {
        console.log('done');
      }
    });
  }
}
