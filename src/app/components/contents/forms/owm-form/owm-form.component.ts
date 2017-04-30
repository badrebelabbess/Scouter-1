import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { OwmModel } from '../../../../models/owm-model';

@Component({
  selector: 'app-owm-form',
  templateUrl: './owm-form.component.html',
  styleUrls: ['./owm-form.component.scss'],
  providers: [FormBuilder]
})
export class OwmFormComponent implements OnInit {

  owmForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.owmForm = this.formBuilder.group(new OwmModel().getModel());
  }

}
