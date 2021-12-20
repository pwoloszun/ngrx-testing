import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject, Subject, NEVER } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';

import { SearchApiService } from '@app/core/api/search-api.service';

@Component({
  selector: 'nts-loadable-content-task',
  templateUrl: './loadable-content-task.component.html',
  styleUrls: ['./loadable-content-task.component.css']
})
export class LoadableContentTaskComponent implements OnInit, OnDestroy {

  searchError$ = new BehaviorSubject<Error | string | null>(null);
  isFetching$ = new BehaviorSubject(false);
  searchQueryValueChanges$ = new Subject<string>();

  searchResults$ = this.searchQueryValueChanges$.pipe(
    tap(() => {
      this.searchError$.next(null);
      this.isFetching$.next(true);
    }),
    switchMap((query) => this.searchApiService.querySearch$(query)),
    catchError((err) => {
      this.searchError$.next(err);
      return NEVER;
    }),
    tap(() => {
      this.isFetching$.next(false);
    })
  );

  constructor(private searchApiService: SearchApiService) { }

  getDataHandler() {
    this.searchQueryValueChanges$.next(`some phrase ${Math.random()}`);
  }

  ngOnInit(): void { }
  ngOnDestroy() { }
}
