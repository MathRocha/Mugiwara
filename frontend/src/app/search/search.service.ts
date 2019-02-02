import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from './search';

const API_KEY = 'AIzaSyC_SRJYnW6LBZyEF4KHQDBjQEQb6vDCZUo';
const SEARCH_ENGINE_ID = '003114172543996873091:ihdelbhrgpk';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  search(searchQuery: string) {
    return this.http.get<Search>(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=one piece ${searchQuery}&searchType=image`);
  }

  searchNextPage(searchQuery: string, start: number) {
    return this.http.get<Search>(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=one piece ${searchQuery}&searchType=image&start=${start}`);
  }
}