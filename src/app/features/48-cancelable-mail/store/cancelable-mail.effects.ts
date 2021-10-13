import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { race, timer } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';

import * as actions from './cancelable-mail.actions';

const TIME_TO_EXP = 3000;

@Injectable()
export class CancelableMailEffects {

  startSendMailFlow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.sendMailStarted),
      tap(() => {
        this.snackBarRef = this.matSnackBar.open('Sending...', 'Cancel');
      }),
      switchMap(() => {
        const timeToCancelExpired$ = timer(TIME_TO_EXP).pipe(
          map(() => actions.timeToCancelExpired())
        );
        const cancelSendMailStarted$ = this.snackBarRef.onAction().pipe(
          map(() => actions.cancelSendMailStarted())
        );
        return race<Action>(
          timeToCancelExpired$,
          cancelSendMailStarted$
        );
      }),
    );
  });

  continueSendMailFlow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.timeToCancelExpired),
      tap(() => {
        this.snackBarRef = this.matSnackBar.open('Mail has been sent.', 'Revert');
      }),
      switchMap(() => {
        const timeToRevertExpired$ = timer(TIME_TO_EXP).pipe(
          map(() => actions.timeToRevertExpired())
        );
        const revertSendMailStarted$ = this.snackBarRef.onAction().pipe(
          map(() => actions.revertSendMailStarted())
        );
        return race<Action>(
          timeToRevertExpired$,
          revertSendMailStarted$
        );
      }),
    );
  });

  finishSendMailFlow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.timeToRevertExpired),
      tap(() => {
        this.snackBarRef = this.matSnackBar.open('Mail successfully sent!', undefined, {
          duration: TIME_TO_EXP
        });
      }),
      map(() => {
        return actions.sendMailSuccessfullyEnded();
      }),
    );
  });

  cancelFlow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.cancelSendMailStarted),
      tap(() => {
        this.snackBarRef = this.matSnackBar.open('Canceling...');
      }),
      delay(TIME_TO_EXP),
      tap(() => {
        this.snackBarRef.dismiss();
      }),
      map(() => {
        return actions.cancelSendMailEnded();
      }),
    );
  });

  revertFlow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.revertSendMailStarted),
      tap(() => {
        this.snackBarRef = this.matSnackBar.open('Reverting changes...');
      }),
      delay(TIME_TO_EXP),
      tap(() => {
        this.snackBarRef.dismiss();
      }),
      map(() => {
        return actions.revertSendMailEnded();
      }),
    );
  });

  private snackBarRef!: MatSnackBarRef<any>;
  // private snackPosition: any = { horizontalPosition: 'rigth', verticalPosition: 'bottom' };

  constructor(
    private actions$: Actions,
    private matSnackBar: MatSnackBar,
    private store: Store<any>,
  ) { }

}
