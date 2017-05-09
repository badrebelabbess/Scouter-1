import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { FacebookModel } from '../../../../models/facebook-model';

import { ConfigApp } from '../../../../config/config-app';

@Component({
  selector: 'app-facebook-form',
  templateUrl: './facebook-form.component.html',
  styleUrls: ['./facebook-form.component.scss'],
  providers: [FormBuilder]
})
export class FacebookFormComponent implements OnInit {

  @Output() notify = new EventEmitter();
  facebookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.facebookForm = this.formBuilder.group(new FacebookModel().getModel());
  }

  save(f: any) {
    const id = this.ls.get(ConfigApp.localStorage.id);
    const type = this.ls.get(ConfigApp.localStorage.type);
    console.log(f);
    this.ls.set(id + ConfigApp.separator + type, f.facebookForm._value);
    this.notify.emit();
  }
}
