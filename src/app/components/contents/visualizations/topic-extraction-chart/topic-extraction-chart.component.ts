import { Component, Input } from '@angular/core';

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

  @Input() json: any;
  last_topic_extraction_training_time: number;
  errorMsg: string;

  constructor(private ds: DataService) {
    setInterval(() => {
      this.last_topic_extraction_training_time = this.json.processing_metrics.last_topic_extraction_training_time;
      // this.ds.getData().subscribe( (resData) => {
      //   this.last_topic_extraction_training_time = resData.processing_metrics.last_topic_extraction_training_time;
      // },
      // resError => this.errorMsg = resError);
    }, 3000);

  }

}
