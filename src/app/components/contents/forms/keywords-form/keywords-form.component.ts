import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'angular-2-local-storage';

import { KeywordsModel } from '../../../../models/keywords-model';

@Component({
  selector: 'app-keywords-form',
  templateUrl: './keywords-form.component.html',
  styleUrls: ['./keywords-form.component.scss'],
  providers: [FormBuilder]
})
export class KeywordsFormComponent implements OnInit {

  keywordsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {
    this.keywordsForm = this.formBuilder.group(new KeywordsModel().getModel());
  }

}
