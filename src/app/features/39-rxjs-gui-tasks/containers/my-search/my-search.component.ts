import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, concatMap, switchMap, filter, map, mergeAll, switchAll } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

const MIN_SEARCH_QUERY_LENGTH = 2;

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent implements OnInit, OnDestroy {

  searchTextCtrl = new FormControl('');

  // TODO searchResults$
  //  handle search query value changes:
  //    then debounce for 400ms (1200ms)
  //    then ignore query if shorter than MIN_SEARCH_QUERY_LENGTH
  //    then ignore if query has not changed
  //    then send querySearch$ request to server & cancel any previous pending request(s)
  //    then render search results on UI

  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    debounceTime(400),
    filter<string>((query) => query.length >= MIN_SEARCH_QUERY_LENGTH),
    distinctUntilChanged(),
    switchMap((query) => this.searchApiService.querySearch$(query))
  );

  // resultsTmp: string[] = [];

  // private subscriptions: Subscription[] = [];

  constructor(private searchApiService: SearchApiService) { }

  ngOnInit() {
    // const sub = this.searchResults$.subscribe((inner$) => {
    //   this.resultsTmp = inner$;
    // });
    // this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    //   this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
