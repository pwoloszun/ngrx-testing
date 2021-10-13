import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { map } from 'rxjs/operators';
import { select } from '@ngrx/store';

import { createStore } from 'src/test/utils/create-store';
import { expectStateChanges } from 'src/test/utils/helpers';
import { MailSendStage } from '../cancelable-mail.reducer';

import { SharedModule } from '@app/shared/shared.module';
import { MailStatus, MailEntityParams } from '../../models/mail-entity';

import {
  reducer,
  actions,
  AppState,
  cancelableMailFeatureKey,
  selectors,
  CancelableMailEffects,
} from '../index';
import { timer } from 'rxjs';

describe('AsyncCounterRefactored slice', () => {

  fit('should run send email flow if neither cancelled nor reverted', (done) => {
    expect(true).toEqual(false);

    [
      MailSendStage.Idle,
      MailSendStage.SendingCancellable,
      MailSendStage.SendingReversible,
      MailSendStage.Sent,
      MailSendStage.Idle,
    ]


    jest.useFakeTimers();

    jest.advanceTimersByTime(500);

    jest.advanceTimersByTime(12_000);

    jest.useRealTimers();
  });

  xit('should run cancel send email flow if cancelled', (done) => {

    [
      MailSendStage.Idle,
      MailSendStage.SendingCancellable,
      MailSendStage.SendingCancelled,
      MailSendStage.Idle,
    ]

    expect(true).toEqual(false);
  });

});

function createSliceStore() {
  // effects: [CancelableMailEffects],
  // imports: [SharedModule, NoopAnimationsModule]

  return null as any; // TODO
}

function generateEntity(): MailEntityParams {
  return {
    title: 'Meeting',
    to: ['qq@qq.qq'],
    from: 'ww@ww.ww',
    content: 'Lorem ipsum...',
    createdAt: 1234567,
    status: MailStatus.Sent
  };
}
