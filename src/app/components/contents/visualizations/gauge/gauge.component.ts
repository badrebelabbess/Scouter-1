import { Component } from '@angular/core';

import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

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
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ]
})
export class GaugeComponent {
  options: any;

  constructor() {
    this.options = {
      chart: {
          type: 'solidgauge'
      },

      title: null,

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
              text: 'Speed'
          },
          labels: {
              y: 16
          },
          min: 0,
          max: 200
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
          name: 'Speed',
          data: [80],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                      '<span style="font-size:12px;color:silver">km/h</span></div>'
          },
          tooltip: {
              valueSuffix: ' km/h'
          }
      }]
    };
  }

}
