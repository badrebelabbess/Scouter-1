import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  return require('highcharts');
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    DataService
  ]
})
export class LineChartComponent {

  options: any;
  chart: any;

  constructor(private ds: DataService) {
    const date = new Date();
    this.options = {
        chart: {
          // width: '100%',
          height: '100%'
        },
        title : { text : 'simple chart' },
        xAxis: {
          type: 'datetime',
        },
        series: [{
            // data: [29.9, 71.5, 106.4, 129.2],
            data: [],
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
