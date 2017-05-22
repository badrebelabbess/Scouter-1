import { Component } from '@angular/core';

import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-topic-extraction-chart',
  templateUrl: './topic-extraction-chart.component.html',
  styleUrls: ['./topic-extraction-chart.component.scss'],
  providers: [
    DataService
  ]
})
export class TopicExtractionChartComponent {

  last_topic_extraction_training_time: number;
  errorMsg: string;

  constructor(private ds: DataService) {
    setInterval(() => {
      this.ds.getDefautWorkFlow().subscribe( (resData) => {
        this.last_topic_extraction_training_time = resData.processing_metrics.last_topic_extraction_training_time;
      },
      resError => this.errorMsg = resError);
    }, 1000);

  }

}
