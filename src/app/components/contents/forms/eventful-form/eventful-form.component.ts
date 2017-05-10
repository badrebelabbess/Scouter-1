import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { EventfulModel } from '../../../../models/eventful-model';

import { ConfigApp } from '../../../../config/config-app';

@Component({
  selector: 'app-eventful-form',
  templateUrl: './eventful-form.component.html',
  styleUrls: ['./eventful-form.component.scss'],
  providers: [FormBuilder]
})
export class EventfulFormComponent implements OnInit {

  @Output() notify = new EventEmitter();

  eventFulForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.eventFulForm = this.formBuilder.group(new EventfulModel().getModel());
  }

  save(f: any) {
    // const id = this.ls.get(ConfigApp.localStorage.id);
    // const type = this.ls.get(ConfigApp.localStorage.type);
    let type = this.ls.get(ConfigApp.localStorage.type) + '';
    type = type.replace(ConfigApp.imageType, '');
    // this.ls.set(id + ConfigApp.separator + type, f.eventFulForm._value);
    this.ls.set(type, f.eventFulForm._value);
    this.notify.emit();
  }

}
