import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    this.DBform = this.formBuilder.group({
      name: ['Vishwas', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address: this.formBuilder.group({
        street: [],
        city: [],
        postalcode: [null, [Validators.pattern('^[1-9][0-9]{4}$')]]
      })
    });
  }

}
