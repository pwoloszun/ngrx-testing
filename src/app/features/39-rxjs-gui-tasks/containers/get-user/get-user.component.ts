import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, finalize, retry } from 'rxjs/operators';
import { EMPTY, NEVER, Subscription } from 'rxjs';

import { ErrorModalComponent } from '@shared/error-modal/error-modal.component';
import { FakeApiService } from '@api/fake-api.service';
import { fullObserver } from '@app/utils';

@Component({
  selector: 'nts-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnDestroy {

  private allSubscriptions: Subscription[] = [];

  constructor(
    private fakeApiService: FakeApiService,
    private matSnackBar: MatSnackBar
  ) {
  }

  handleDownloadUser() {
    const userId = 100;

    const sub = this.fakeApiService
      .failedRequest$(`/user/${userId}`, `Cant download User id=${userId}`)
      .pipe(
        retry(2),
        catchError((err: Error) => {
          this.logError(err);
          this.openErrorSnackBar(err.message, 5);
          return EMPTY;
        })
      ).subscribe(fullObserver('get user'));

    this.allSubscriptions.push(sub);
  }

  ngOnDestroy() {
    this.allSubscriptions.forEach((s) => s.unsubscribe());
  }

  private logError(error: Error) {
    const sub = this.fakeApiService.successfulRequest$('/log/error', { error })
      .subscribe();
    this.allSubscriptions.push(sub);
  }

  private openErrorSnackBar(message: string, durationInSeconds: number) {
    const duration = durationInSeconds * 1000;
    this.matSnackBar.openFromComponent(ErrorModalComponent, {
      data: { message, duration },
      duration,
    });
  }

}
