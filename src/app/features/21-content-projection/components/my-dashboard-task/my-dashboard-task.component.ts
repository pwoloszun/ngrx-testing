import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { SearchApiService } from '@app/core/api/search-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'nts-my-dashboard-task',
  templateUrl: './my-dashboard-task.component.html',
  styleUrls: ['./my-dashboard-task.component.css']
})
export class MyDashboardTaskComponent implements OnInit {

  searchFormCtrl = new FormControl();

  searchResults$ = this.searchFormCtrl.valueChanges.pipe(
    debounceTime(600),
    distinctUntilChanged(),
    switchMap((query: string) => {
      return this.searchApiService.querySearch$(query);
    }),
  );

  constructor(private searchApiService: SearchApiService) { }

  ngOnInit(): void { }

}
