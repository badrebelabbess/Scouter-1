import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { OwmModel } from '../../../../models/owm-model';

import { ConfigApp } from '../../../../config/config-app';

@Component({
  selector: 'app-owm-form',
  templateUrl: './owm-form.component.html',
  styleUrls: ['./owm-form.component.scss'],
  providers: [FormBuilder]
})
export class OwmFormComponent implements OnInit {

  @Output() notify = new EventEmitter();
  owmForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.owmForm = this.formBuilder.group(new OwmModel().getModel());
  }

  save(f: any) {
    const id = this.ls.get(ConfigApp.localStorage.id);
    const type = this.ls.get(ConfigApp.localStorage.type);
    this.ls.set(id + ConfigApp.separator + type, f.owmForm._value);
    this.notify.emit();
  }
}
