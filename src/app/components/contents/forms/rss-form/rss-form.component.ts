import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { RssModel } from '../../../../models/rss-model';

import { ConfigApp } from '../../../../config/config-app';

@Component({
  selector: 'app-rss-form',
  templateUrl: './rss-form.component.html',
  styleUrls: ['./rss-form.component.scss'],
  providers: [FormBuilder]
})
export class RssFormComponent implements OnInit {

  @Output() notify = new EventEmitter();
  RSSForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.RSSForm = this.formBuilder.group(new RssModel().getModel());
  }

  save(f: any) {
    // const id = this.ls.get(ConfigApp.localStorage.id);
    // const type = this.ls.get(ConfigApp.localStorage.type);
    let type = this.ls.get(ConfigApp.localStorage.type) + '';
    type = type.replace(ConfigApp.imageType, '');
    // this.ls.set(id + ConfigApp.separator + type, f.RSSForm._value);
    this.ls.set(type, f.RSSForm._value);
    this.notify.emit();
  }
}
