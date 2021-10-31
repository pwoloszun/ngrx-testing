import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';


const MIN_SEARCH_QUERY_LENGTH = 2;

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    debounceTime(400),
    filter((query: string) => query.length >= MIN_SEARCH_QUERY_LENGTH),
    distinctUntilChanged(),
    switchMap((query: string) => this.searchApiService.querySearch$(query)),
  );

  constructor(private searchApiService: SearchApiService) {
  }

}
