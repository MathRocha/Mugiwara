import { Component, Input } from '@angular/core';
import { CrewMember } from '../crew-member';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent{
  @Input() crewMember: CrewMember;
  
  constructor() {}
}
