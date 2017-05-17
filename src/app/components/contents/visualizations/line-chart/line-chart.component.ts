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

  constructor(private ds: DataService) {
    const date = new Date();
    let value: number;
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
    // setInterval(() => this.chart.series[0].addPoint(this.ds.getPoint(), true, true), 1000);
    function updateDate() {
        this.ds.getDefautWorkFlow().subscribe( function(resData) {
            console.log(resData.value);
            this.chart.series[0].addPoint(parseFloat(resData.value), true, true);
          },
          resError => this.errorMsg = resError
        );
    };
    setInterval(updateDate, 1000);
  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
