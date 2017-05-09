import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { OpenAgendaModel } from '../../../../models/open-agenda-model';

import { ConfigApp } from '../../../../config/config-app';

@Component({
  selector: 'app-open-agenda-form',
  templateUrl: './open-agenda-form.component.html',
  styleUrls: ['./open-agenda-form.component.scss'],
  providers: [FormBuilder]
})
export class OpenAgendaFormComponent implements OnInit {

  @Output() notify = new EventEmitter();
  openAgendaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.openAgendaForm = this.formBuilder.group(new OpenAgendaModel().getModel());
  }

  save(f: any) {
    const id = this.ls.get(ConfigApp.localStorage.id);
    const type = this.ls.get(ConfigApp.localStorage.type);
    this.ls.set(id + ConfigApp.separator + type, f.openAgendaForm._value);
    this.notify.emit();
  }

}
