import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, concatMap, switchMap, filter, delay, mergeMapTo } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

const MIN_SEARCH_QUERY_LENGTH = 3;

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    debounceTime(600),
    filter((query) => query.length >= MIN_SEARCH_QUERY_LENGTH),
    distinctUntilChanged(),
    switchMap((query: string) => {
      return this.searchApiService.querySearch$(query);
    })
  );

  // TODO searchResults$
  //  handle search query value changes:
  //    then debounce for 400ms (1200ms)
  //    then ignore query if shorter than MIN_SEARCH_QUERY_LENGTH
  //    then ignore if query has not changed
  //    then send querySearch$ request to server & cancel any previous pending request(s)
  //    then render search results on UI

  // resultsTmp: string[] = [];

  // private subscriptions: Subscription[] = [];

  constructor(private searchApiService: SearchApiService) { }

  ngOnInit() {
    // const sub = this.searchResults$.subscribe((results) => {
    //   this.resultsTmp = results;
    // });
    // this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    // this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
