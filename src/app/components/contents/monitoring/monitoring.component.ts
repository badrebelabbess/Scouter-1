import { Component, OnInit, Input } from '@angular/core';

import { AccordionService } from '../../../services/accordion.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
  providers: [
    AccordionService,
    DataService
  ]
})
export class MonitoringComponent implements OnInit {

  categories = [];
  errorMsg: string;
  @Input() json: any;

  constructor(private as: AccordionService,
              private ds: DataService) {
    // Actualize getting data
    setInterval(() => {
      this.ds.getData().subscribe( (resData) => {
        this.json = resData;
      },
      resError => this.errorMsg = resError);
    }, 3000);
  }

  ngOnInit() {
    this.as.getAccordionsMonitoring()
        .subscribe( resData  => this.categories = resData,
                    resError => this.errorMsg   = resError);
  }

  open(categorie: any) {
    categorie.value = !categorie.value;
  }

}
