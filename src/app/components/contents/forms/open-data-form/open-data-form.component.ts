import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-data-form',
  templateUrl: './open-data-form.component.html',
  styleUrls: ['./open-data-form.component.scss']
})
export class OpenDataFormComponent implements OnInit {

  choosenContent: string;
  isCatIsChoosen = false;

  constructor() { }

  ngOnInit() {
  }

  open(elt: string): void {
    this.isCatIsChoosen = !this.isCatIsChoosen;
    this.choosenContent = elt;
  }

}
