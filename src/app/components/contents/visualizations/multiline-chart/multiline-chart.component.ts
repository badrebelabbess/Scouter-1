import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  return require('highcharts');
}

@Component({
  selector: 'app-multiline-chart',
  templateUrl: './multiline-chart.component.html',
  styleUrls: ['./multiline-chart.component.scss'],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    DataService
  ]
})
export class MultilineChartComponent {

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
        title : { text : 'multiline chart' },
        xAxis: {
          type: 'datetime',
        },
        plotOptions: {
            series: {
                pointStart: Date.UTC(date.getUTCFullYear(),
                                date.getUTCMonth(),
                                date.getUTCDay(),
                                date.getUTCHours(),
                                date.getUTCMinutes(),
                                date.getUTCSeconds(),
                                date.getUTCMilliseconds()),
                pointInterval: 1000
            }
        },
        series: [{
            name: 'DBpedia',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'Facebook',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
          }, {
            name: 'Open Agenda',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
          }, {
            name: 'OWM',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
          }, {
            name: 'RSS',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
          }
        ]
    };

    // Actualize getting data
    setInterval(() => {
      this.ds.getDefautWorkFlow().subscribe( (resData) => {
        this.chart.series[0].addPoint(resData.value * 10, true, true);
        this.chart.series[1].addPoint(resData.value * 1, true, true);
        this.chart.series[2].addPoint(resData.value * 2, true, true);
        this.chart.series[3].addPoint(resData.value * 4, true, true);
        this.chart.series[4].addPoint(resData.value * 5, true, true);
      },
      resError => this.errorMsg = resError);
    }, 1000);

  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
