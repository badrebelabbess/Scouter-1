import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-kafka-uptime-chart',
  templateUrl: './kafka-uptime-chart.component.html',
  styleUrls: ['./kafka-uptime-chart.component.scss'],
  providers: [
    DataService
  ]
})
export class KafkaUptimeChartComponent {

  uptime: number;
  errorMsg: string;

  constructor(private ds: DataService) {
    setInterval(() => {
      this.ds.getData().subscribe( (resData) => {
        this.uptime = resData.kafka_metrics.uptime;
      },
      resError => this.errorMsg = resError);
    }, 1000);
  }

}
