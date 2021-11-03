import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { some } from 'lodash';
import { delay, filter, map } from 'rxjs/operators';

const AllNaviEventTypes = [NavigationStart, NavigationEnd, NavigationCancel, NavigationError];

@Component({
  selector: 'nts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  loading$ = this.router.events.pipe(
    filter((e) => some(AllNaviEventTypes, (naviEvent) => e instanceof naviEvent)),
    map((e) => e instanceof NavigationStart),
  );

  constructor(private router: Router) { }

  ngOnInit() {
    // this.router.events.subscribe((ev) => {
    //   console.log(ev);
    // });
  }

}
