import { Component, Input } from '@angular/core';

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

  @Input() json: any;
  uptime: number;
  errorMsg: string;

  constructor(private ds: DataService) {
    setInterval(() => {
      this.uptime = this.json.kafka_metrics.uptime;
      // this.ds.getData().subscribe( (resData) => {
      //   this.uptime = resData.kafka_metrics.uptime;
      // },
      // resError => this.errorMsg = resError);
    }, 3000);
  }

}
