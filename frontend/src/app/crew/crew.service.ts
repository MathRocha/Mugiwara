import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrewMember } from './crew-member';

@Injectable()
export class CrewService {

  constructor(private http: HttpClient) { }

  getCrew() {
    return this.http.get<CrewMember[]>('http://localhost:3000/crew');
  }

  getCrewMember(crewMemberId: number) {
    return this.http.get<CrewMember>(`http://localhost:3000/crew/${crewMemberId}`);
  }
}
