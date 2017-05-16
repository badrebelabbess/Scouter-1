import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  providers: [DataService]
})
export class LineChartComponent {

  options: any;
  chart: any;

  constructor(private ds: DataService) {
    const date = new Date();
    this.options = {
        title : { text : 'simple chart' },
        xAxis: {
          type: 'datetime',
        },
        series: [{
            // data: [29.9, 71.5, 106.4, 129.2],
            data: [29.9],
            pointStart: Date.UTC(date.getUTCFullYear(),
                                date.getUTCMonth(),
                                date.getUTCDay(),
                                date.getUTCHours(),
                                date.getUTCMinutes(),
                                date.getUTCSeconds(),
                                date.getUTCMilliseconds()),
            pointInterval: 1000
        }]
    };
    setInterval(() => this.chart.series[0].addPoint(this.ds.getPoint(), true, false), 1000);
  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
