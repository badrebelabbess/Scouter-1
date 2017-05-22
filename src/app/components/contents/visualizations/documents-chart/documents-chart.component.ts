import { Component, Input } from '@angular/core';

import { DataService } from '../../../../services/data.service';

import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  return require('highcharts');
}

@Component({
  selector: 'app-documents-chart',
  templateUrl: './documents-chart.component.html',
  styleUrls: ['./documents-chart.component.scss'],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    DataService
  ]
})
export class DocumentsChartComponent {

  @Input() json: any;
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
            name: 'Last deleted documents',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'Last inserted documents',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
          }, {
            name: 'Last returned documents',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
          }, {
            name: 'Last updated documents',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
          }
        ]
    };

    // Actualize getting data
    setInterval(() => {
      this.chart.series[0].addPoint(this.json.mongodb_metrics.last_deleted_documents * 10, true, true);
      this.chart.series[1].addPoint(this.json.mongodb_metrics.last_inserted_documents * 10, true, true);
      this.chart.series[2].addPoint(this.json.mongodb_metrics.last_returned_documents * 10, true, true);
      this.chart.series[3].addPoint(this.json.mongodb_metrics.last_updated_documents * 10, true, true);
      // this.ds.getData().subscribe( (resData) => {
      //   this.chart.series[0].addPoint(resData.mongodb_metrics.last_deleted_documents * 10, true, true);
      //   this.chart.series[1].addPoint(resData.mongodb_metrics.last_inserted_documents * 10, true, true);
      //   this.chart.series[2].addPoint(resData.mongodb_metrics.last_returned_documents * 10, true, true);
      //   this.chart.series[3].addPoint(resData.mongodb_metrics.last_updated_documents * 10, true, true);
      // },
      // resError => this.errorMsg = resError);
    }, 3000);

  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
