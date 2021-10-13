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

  xit('should run send email flow if neither cancelled nor reverted', (done) => {
    expect(true).toEqual(false);
  });

  xit('should run cancel send email flow if cancelled', (done) => {
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
