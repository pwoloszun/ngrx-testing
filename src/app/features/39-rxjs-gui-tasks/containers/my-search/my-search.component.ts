import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, concatMap, switchMap, filter } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

const MIN_SEARCH_QUERY_LENGTH = 2;

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  // ggg = this.searchTextCtrl.valueChanges.

  // TODO searchResults$
  //  handle search query value changes:
  //    then debounce for 400ms (1200ms)
  //    then ignore query if shorter than MIN_SEARCH_QUERY_LENGTH
  //    then ignore if query has not changed
  //    then send querySearch$ request to server & cancel any previous pending request(s)
  //    then render search results on UI

  searchResults$ = of([
    'bob',
    'batman',
    'imba!'
  ]);

  constructor(private searchApiService: SearchApiService) { }

}
