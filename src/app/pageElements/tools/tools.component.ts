import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  isOpenData = true;
  isOpenKeywords = true;
  isOpenAnalytics = true;

  constructor() { }

  ngOnInit() {
  }

  reverse(val: boolean): void {
    val = !val;
  }

}
