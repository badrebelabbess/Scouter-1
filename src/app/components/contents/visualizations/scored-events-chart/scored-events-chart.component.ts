import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-scored-events-chart',
  templateUrl: './scored-events-chart.component.html',
  styleUrls: ['./scored-events-chart.component.scss'],
  providers: [
    DataService
  ]
})
export class ScoredEventsChartComponent {

  last_scored_events: number;
  errorMsg: string;

  constructor(private ds: DataService) {
    setInterval(() => {
      this.ds.getDefautWorkFlow().subscribe( (resData) => {
        this.last_scored_events = resData.processing_metrics.last_scored_events_count;
      },
      resError => this.errorMsg = resError);
    }, 1000);

  }

}
