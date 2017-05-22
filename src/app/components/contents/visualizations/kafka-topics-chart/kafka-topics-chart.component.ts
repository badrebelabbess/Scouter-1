import { Component } from '@angular/core';

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

  topics_count: number;
  errorMsg: string;

  constructor(private ds: DataService) {
    setInterval(() => {
      this.ds.getDefautWorkFlow().subscribe( (resData) => {
        this.topics_count = resData.kafka_metrics.topics_count;
      },
      resError => this.errorMsg = resError);
    }, 1000);
  }

}
