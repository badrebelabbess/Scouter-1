import { Component, Input } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-kafka-topics-chart',
  templateUrl: './kafka-topics-chart.component.html',
  styleUrls: ['./kafka-topics-chart.component.scss'],
  providers: [
    DataService
  ]
})
export class KafkaTopicsChartComponent {

  @Input() json: any;
  topics_count: number;
  errorMsg: string;

  constructor(private ds: DataService) {
    setInterval(() => {
      this.topics_count = this.json.kafka_metrics.topics_count;
      // this.ds.getData().subscribe( (resData) => {
      //   this.topics_count = resData.kafka_metrics.topics_count;
      // },
      // resError => this.errorMsg = resError);
    }, 3000);
  }

}
