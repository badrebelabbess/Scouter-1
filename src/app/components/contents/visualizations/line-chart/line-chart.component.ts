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
  errorMsg: string;
  private value: number;

  constructor(private ds: DataService) {
    const date = new Date();
    this.options = {
        chart: {
          // width: '100%',
          height: '50%'
        },
        title : { text : 'simple chart' },
        xAxis: {
          type: 'datetime',
        },
        series: [{
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    // Actualize getting data
    setInterval(() => {
      this.ds.getDefautWorkFlow().subscribe( (resData) => {
        this.value = parseFloat(resData.value);
        this.chart.series[0].addPoint(resData.value * 10, true, true);
      },
      resError => this.errorMsg = resError);
    }, 1000);

  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
