import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { DBPediaModel } from '../../../../models/dbpedia-model';

import { ConfigApp } from '../../../../config/config-app';

@Component({
  selector: 'app-dbpedia-form',
  templateUrl: './dbpedia-form.component.html',
  styleUrls: ['./dbpedia-form.component.scss'],
  providers: [FormBuilder]
})
export class DbpediaFormComponent implements OnInit {

  @Output() notify = new EventEmitter();
  startDate: string;
  DBform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.DBform = this.formBuilder.group(new DBPediaModel().getModel());
  }

  save(f: any) {
    // const id = this.ls.get(ConfigApp.localStorage.id);
    // const type = this.ls.get(ConfigApp.localStorage.type);
    let type = this.ls.get(ConfigApp.localStorage.type) + '';
    type = type.replace(ConfigApp.imageType, '');
    // this.ls.set(id + ConfigApp.separator + type, f.DBform._value);
    this.ls.set(type, f.DBform._value);
    this.notify.emit();
  }

}
