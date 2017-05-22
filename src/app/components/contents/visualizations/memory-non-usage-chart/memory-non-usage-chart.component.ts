import { Component } from '@angular/core';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { DataService } from '../../../../services/data.service';

import HCSoldGauge from 'highcharts/modules/solid-gauge';

const Highcharts = require('highcharts');
const HighchartsMore = require('highcharts/highcharts-more');

export function highchartsFactory() {
  return Highcharts;
}

HighchartsMore(Highcharts);
HCSoldGauge(Highcharts);

Highcharts.setOptions({
  colors: ['#058DC7', '#50B432', '#ED561B']
});

@Component({
  selector: 'app-memory-non-usage-chart',
  templateUrl: './memory-non-usage-chart.component.html',
  styleUrls: ['./memory-non-usage-chart.component.scss'],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    DataService
  ]
})
export class MemoryNonUsageChartComponent {

  chart: any;
  options: any;
  errorMsg: string;
  static maxValue = 2048;

  constructor(private ds: DataService) {
    this.options = {
      chart: {
          type: 'solidgauge'
      },

      title: 'Memory non heap usage',

      pane: {
          center: ['50%', '85%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
              innerRadius: '60%',
              outerRadius: '100%',
              shape: 'arc'
          }
      },

      tooltip: {
          enabled: false
      },

      // the value axis
      yAxis: {
          stops: [
              [0.1, '#55BF3B'], // green
              [0.5, '#DDDF0D'], // yellow
              [0.9, '#DF5353'] // red
          ],
          lineWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
              y: -70,
              text: 'Memory non heap usage'
          },
          labels: {
              y: 16
          },
          min: 0,
          max: MemoryNonUsageChartComponent.maxValue
      },

      plotOptions: {
          solidgauge: {
              dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
              }
          }
      },

      credits: {
          enabled: false
      },

      series: [{
          name: 'Memory non heap usage',
          data: [0],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                      '<span style="font-size:14px;color:silver"></span></div>'
          },
          tooltip: {
              valueSuffix: ' '
          }
      }]
    };

    // Actualize getting data
    setInterval(() => {
      this.ds.getDefautWorkFlow().subscribe( (resData) => {
        let point,
          newVal,
          inc;

        if (this.chart) {
            point = this.chart.series[0].points[0];
            inc = Math.round(resData.mongodb_metrics.last_bytesIn);
            point.update(inc);
        }
      },
      resError => this.errorMsg = resError);
    }, 1000);
  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

}
