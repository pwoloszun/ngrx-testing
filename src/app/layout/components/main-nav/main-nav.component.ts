import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fundamentalsSection } from './route-sections/fundamentals-section';
import { designPrinciplesSection } from './route-sections/design-principles-section';
import { advancedSection } from './route-sections/advanced-section';
import { extrasSection } from './route-sections/extras-section';
import { streamsSection } from './route-sections/streams-section';
import { testingSection } from './route-sections/testing-section';

@Component({
  selector: 'nts-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {

  mainMenuSections = [
    fundamentalsSection,
    designPrinciplesSection,
    advancedSection,
    extrasSection,
    testingSection,
    streamsSection,
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) { }
}
