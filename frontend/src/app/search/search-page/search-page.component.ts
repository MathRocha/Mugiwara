import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrewMember } from 'src/app/crew/crew-member';
import { Search } from '../search';
import { CrewService } from 'src/app/crew/crew.service';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  crewMember: CrewMember;
  searchResult: Search[] = [];
  debounce: Subject<string> = new Subject<string>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private crewService: CrewService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.getCrewMember(this.activatedRoute.snapshot.params.crewMemberId);
    this.debounce
        .pipe(debounceTime(400))
        .subscribe(() => this.googleSearchNextPage(this.crewMember.name, this.searchResult[this.searchResult.length - 1].queries.nextPage[0].startIndex));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  getCrewMember(crewMemberId: number) {
    this.crewService
      .getCrewMember(crewMemberId)
      .subscribe(result => {
        this.crewMember = result;
        this.googleSearch(this.crewMember.name);
      },
      err => console.log(err));
  }

  googleSearch(searchString: string) {
    this.searchService
      .search(searchString)
      .subscribe(result => {
        console.log(result);
        this.searchResult.push(result);
        console.log(this.searchResult);
      },
      err => console.log(err));
  }

  googleSearchNextPage(searchString: string, start: number) {
    this.searchService
      .searchNextPage(searchString, start)
      .subscribe(result => {
        console.log(result);
        this.searchResult.push(result);
        console.log(this.searchResult);
      },
      err => console.log(err));
  }

}