import { Component, Input } from '@angular/core';

import { DataService } from '../../../../services/data.service';

import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  return require('highcharts');
}

@Component({
  selector: 'app-scoring-time-chart',
  templateUrl: './scoring-time-chart.component.html',
  styleUrls: ['./scoring-time-chart.component.scss'],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    DataService
  ]
})
export class ScoringTimeChartComponent {

  @Input() json: any;
  options: any;
  chart: any;
  errorMsg: string;

  constructor(private ds: DataService) {
    const date = new Date();
    let value: number;
    this.options = {
        chart: {
          width: 500,
          height: '45%',
          borderColor: '#000',
          borderWidth: 1
        },
        title : { text : 'Last scoring time' },
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
            name: 'Open Data',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'RSS',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'Social',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
    };

    // Actualize getting data
    setInterval(() => {
      this.chart.series[0].addPoint(this.json.processing_metrics.last_scoring_time_opendata, true, true);
      this.chart.series[1].addPoint(this.json.processing_metrics.last_scoring_time_rss, true, true);
      this.chart.series[2].addPoint(this.json.processing_metrics.last_scoring_time_social, true, true);
      // this.ds.getData().subscribe( (resData) => {
      //   this.chart.series[0].addPoint(resData.processing_metrics.last_scoring_time_opendata, true, true);
      //   this.chart.series[1].addPoint(resData.processing_metrics.last_scoring_time_rss, true, true);
      //   this.chart.series[2].addPoint(resData.processing_metrics.last_scoring_time_social, true, true);
      // },
      // resError => this.errorMsg = resError);
    }, 3000);

  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
