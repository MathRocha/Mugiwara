import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CrewService } from '../crew.service';
import { CrewMember } from '../crew-member';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {
  crew: CrewMember[];
  selectedCrewMember: CrewMember;
  showDetail = false;
  @Output() emitClick = new EventEmitter();

  constructor(private crewService: CrewService) { }

  ngOnInit() {
    this.crewService
      .getCrew()
      .subscribe(result => {
        console.log(result);
        this.crew = result;
      },
      err => console.log(err));
  }

  toggleDetail(crewMember: CrewMember) {
    if(this.selectedCrewMember == crewMember) {
      this.showDetail = !this.showDetail;
    } else {
      this.selectedCrewMember = crewMember;
      this.showDetail = true;
    }
    this.emitClick.emit({showDetail: this.showDetail, selectedCrewMember: this.selectedCrewMember});
  }
}
