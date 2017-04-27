import { Component, Input, OnInit } from '@angular/core';
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

  @Input() id: string;
  @Input() type: string;

  DBform: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.DBform = this.formBuilder.group(new DBPediaModel());
  }

  save(): void {
    console.log(this.DBform.value);
  }

}
