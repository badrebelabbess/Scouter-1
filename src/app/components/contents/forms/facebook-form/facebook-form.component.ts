import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { FacebookModel } from '../../../../models/facebook-model';

@Component({
  selector: 'app-facebook-form',
  templateUrl: './facebook-form.component.html',
  styleUrls: ['./facebook-form.component.scss'],
  providers: [FormBuilder]
})
export class FacebookFormComponent implements OnInit {

  facebookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.facebookForm = this.formBuilder.group(new FacebookModel().getModel());
  }

}
