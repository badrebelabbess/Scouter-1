import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { KeywordsModel } from '../../../../models/keywords-model';

import { ConfigApp } from '../../../../config/config-app';

@Component({
  selector: 'app-keywords-form',
  templateUrl: './keywords-form.component.html',
  styleUrls: ['./keywords-form.component.scss'],
  providers: [FormBuilder]
})
export class KeywordsFormComponent implements OnInit {

  @Output()
  notify = new EventEmitter();
  keywordsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.keywordsForm = this.formBuilder.group(new KeywordsModel().getModel());
  }

  save(f: any) {
    // const id = this.ls.get(ConfigApp.localStorage.id);
    // const type = this.ls.get(ConfigApp.localStorage.type);
    let type = this.ls.get(ConfigApp.localStorage.type) + '';
    type = type.replace(ConfigApp.imageType, '');
    // this.ls.set(id + ConfigApp.separator + type, f.keywordsForm._value);
    this.ls.set(type, f.keywordsForm._value);
    this.notify.emit();
  }
}
