import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { DBPediaModel } from '../../../../models/dbpedia-model';

@Component({
  selector: 'app-dbpedia-form',
  templateUrl: './dbpedia-form.component.html',
  styleUrls: ['./dbpedia-form.component.scss'],
  providers: [FormBuilder]
})
export class DbpediaFormComponent implements OnInit {

  @Output() notify = new EventEmitter();

  DBform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.DBform = this.formBuilder.group(new DBPediaModel().getModel());
  }

  save(): void {
    this.ls.set(this.ls.get('id') + '.' + this.ls.get('type'), this.DBform.value);
    this.notify.emit();
  }

}
