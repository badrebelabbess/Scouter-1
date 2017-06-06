import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  isOpenData = false;
  isOpenKeywords = false;
  isOpenAnalytics = false;
  isOpenResults = false;

  constructor() { }

  ngOnInit() {
  }

  reverseOpenData(): void {
    this.isOpenData = !this.isOpenData;
  }

  reverseOpenKeywords(): void {
    this.isOpenKeywords = !this.isOpenKeywords;
  }

  reverseOpenAnalytics(): void {
    this.isOpenAnalytics = !this.isOpenAnalytics;
  }

  reverseResults(): void {
    this.isOpenResults = !this.isOpenResults;
  }

}
