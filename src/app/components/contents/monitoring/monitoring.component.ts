import { Component, OnInit } from '@angular/core';

import { AccordionService } from '../../../services/accordion.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
  providers: [
    AccordionService
  ]
})
export class MonitoringComponent implements OnInit {

  categories = [];
  errorMsg: string;

  constructor(private as: AccordionService) { }

  ngOnInit() {
    this.as.getAccordionsMonitoring()
        .subscribe( resData  => this.categories = resData,
                    resError => this.errorMsg   = resError);
  }

  open(categorie: any) {
    categorie.value = !categorie.value;
  }

}
