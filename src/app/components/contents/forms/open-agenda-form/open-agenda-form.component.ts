import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { OpenAgendaModel } from '../../../../models/open-agenda-model';

@Component({
  selector: 'app-open-agenda-form',
  templateUrl: './open-agenda-form.component.html',
  styleUrls: ['./open-agenda-form.component.scss'],
  providers: [FormBuilder]
})
export class OpenAgendaFormComponent implements OnInit {

  openAgendaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.openAgendaForm = this.formBuilder.group(new OpenAgendaModel().getModel());
  }

}
