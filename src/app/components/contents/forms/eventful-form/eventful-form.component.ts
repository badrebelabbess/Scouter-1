import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { EventfulModel } from '../../../../models/eventful-model';

@Component({
  selector: 'app-eventful-form',
  templateUrl: './eventful-form.component.html',
  styleUrls: ['./eventful-form.component.scss'],
  providers: [FormBuilder]
})
export class EventfulFormComponent implements OnInit {

  eventFulForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.eventFulForm = this.formBuilder.group(new EventfulModel().getModel());
  }

}
