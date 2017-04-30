import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { TwitterModel } from '../../../../models/twitter-model';

@Component({
  selector: 'app-twitter-form',
  templateUrl: './twitter-form.component.html',
  styleUrls: ['./twitter-form.component.scss'],
  providers: [FormBuilder]
})
export class TwitterFormComponent implements OnInit {

  twitterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.twitterForm = this.formBuilder.group(new TwitterModel().getModel());
  }

}
