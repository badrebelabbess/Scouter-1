import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DBPediaModel } from '../../../../models/dbpedia-model';

@Component({
  selector: 'app-dbpedia-form',
  templateUrl: './dbpedia-form.component.html',
  styleUrls: ['./dbpedia-form.component.scss'],
  providers: [FormBuilder]
})
export class DbpediaFormComponent implements OnInit {

  DBform: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.DBform = this.formBuilder.group(new DBPediaModel());
  }

}
