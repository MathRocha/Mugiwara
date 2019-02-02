import { Component } from '@angular/core';
import { CrewMember } from '../crew/crew-member';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  crewMember: CrewMember;
  showDetail = false;

  constructor() {}

  clickReceiver(emission) {
    this.crewMember = emission.selectedCrewMember;
    this.showDetail = emission.showDetail;
  }
}