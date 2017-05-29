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
  isOpenResults = true;

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
