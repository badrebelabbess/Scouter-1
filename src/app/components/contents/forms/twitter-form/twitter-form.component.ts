import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { TwitterModel } from '../../../../models/twitter-model';

import { ConfigApp } from '../../../../config/config-app';

@Component({
  selector: 'app-twitter-form',
  templateUrl: './twitter-form.component.html',
  styleUrls: ['./twitter-form.component.scss'],
  providers: [FormBuilder]
})
export class TwitterFormComponent implements OnInit {

  @Output() notify = new EventEmitter();
  twitterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.twitterForm = this.formBuilder.group(new TwitterModel().getModel());
  }

  save(f: any) {
    // const id = this.ls.get(ConfigApp.localStorage.id);
    // const type = this.ls.get(ConfigApp.localStorage.type);
    let type = this.ls.get(ConfigApp.localStorage.type) + '';
    type = type.replace(ConfigApp.imageType, '');
    // this.ls.set(id + ConfigApp.separator + type, f.twitterForm._value);
    const form = f.twitterForm._value;
    form['accountsIds'] = form['accountsIds'].replace(/ /g, '').split(',');
    form['hashtags'] = form['hashtags'].replace(/ /g, '').split(',');
    this.ls.set(type, form);
    this.notify.emit();
  }

}
