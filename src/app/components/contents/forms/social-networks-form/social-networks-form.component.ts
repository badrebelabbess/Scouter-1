import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-networks-form',
  templateUrl: './social-networks-form.component.html',
  styleUrls: ['./social-networks-form.component.scss']
})
export class SocialNetworksFormComponent implements OnInit {

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
