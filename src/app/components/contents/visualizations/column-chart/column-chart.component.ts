import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  return require('highcharts');
}

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    DataService
  ]
})
export class ColumnChartComponent {

  options: any;
  chart: any;

  constructor(private ds: DataService) {
    const date = new Date();
    let value: number;
    this.options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    };
    // setInterval(() => this.chart.series[0].addPoint(this.ds.getPoint(), true, false), 1000);
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
