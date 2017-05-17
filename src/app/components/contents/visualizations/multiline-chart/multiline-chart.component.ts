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
            name: '1',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },{
            name: '2',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
          }
        ]
    };
    setInterval(() => this.chart.series[0].addPoint(this.ds.getPoint(), true, false), 1000);
    // function updateDate() {
    //     this.ds.getDefautWorkFlow().subscribe( function(resData) {
    //         this.chart.series[0].addPoint(parseFloat(resData.value), true, true);
    //       },
    //       resError => this.errorMsg = resError
    //     );
    // };
    // setInterval(updateDate, 1000);
  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
