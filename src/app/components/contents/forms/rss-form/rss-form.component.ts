import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { RssModel } from '../../../../models/rss-model';

@Component({
  selector: 'app-rss-form',
  templateUrl: './rss-form.component.html',
  styleUrls: ['./rss-form.component.scss'],
  providers: [FormBuilder]
})
export class RssFormComponent implements OnInit {

  RSSForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.RSSForm = this.formBuilder.group(new RssModel().getModel());
  }

}
