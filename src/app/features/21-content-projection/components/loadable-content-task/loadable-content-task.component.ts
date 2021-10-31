import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchApiService } from '@app/core/api/search-api.service';

@Component({
  selector: 'nts-loadable-content-task',
  templateUrl: './loadable-content-task.component.html',
  styleUrls: ['./loadable-content-task.component.css']
})
export class LoadableContentTaskComponent implements OnInit, OnDestroy {

  isFetching = false;
  searchResults: string[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private searchApiService: SearchApiService) { }

  ngOnInit(): void { }

  getDataHandler() {
    this.isFetching = true;
    const sub = this.searchApiService
      .querySearch$('batman')
      .subscribe((searchResults) => {
        this.isFetching = false;
        this.searchResults = searchResults;
      });
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
