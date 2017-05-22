import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-last-uptime-chart',
  templateUrl: './last-uptime-chart.component.html',
  styleUrls: ['./last-uptime-chart.component.scss'],
  providers: [
    DataService
  ]
})
export class LastUptimeChartComponent {

  last_uptime: number;
  errorMsg: string;

  constructor(private ds: DataService) {
    setInterval(() => {
      this.ds.getData().subscribe( (resData) => {
        this.last_uptime = resData.mongodb_metrics.last_uptime;
      },
      resError => this.errorMsg = resError);
    }, 1000);

  }

}
