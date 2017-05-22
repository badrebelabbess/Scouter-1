import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  return require('highcharts');
}

@Component({
  selector: 'app-query-time-chart',
  templateUrl: './query-time-chart.component.html',
  styleUrls: ['./query-time-chart.component.scss'],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    DataService
  ]
})
export class QueryTimeChartComponent {

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
        title : { text : 'Last query time' },
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
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'Open Agenda',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'OWM',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'RSS',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
    };

    // Actualize getting data
    setInterval(() => {
      this.ds.getDefautWorkFlow().subscribe( (resData) => {
        this.chart.series[0].addPoint(resData.processing_metrics.last_query_time_dbpedia, true, true);
        this.chart.series[1].addPoint(resData.processing_metrics.last_query_time_facebook, true, true);
        this.chart.series[2].addPoint(resData.processing_metrics.last_query_time_openagenda, true, true);
        this.chart.series[3].addPoint(resData.processing_metrics.last_query_time_owm, true, true);
        this.chart.series[4].addPoint(resData.processing_metrics.last_query_time_rss, true, true);
      },
      resError => this.errorMsg = resError);
    }, 1000);

  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
