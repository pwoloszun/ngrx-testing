import { select } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { createStore } from 'src/test/utils/create-store';
import { expectStateChanges } from 'src/test/utils/helpers';

import { CounterValuesService } from '@api/counter-values.service';

import {
  reducer,
  actions,
  ApplicationState,
  asyncCounterFeatureKey,
  selectors,
  effects,
} from '../index';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

describe('AsyncCounterRefactored slice', () => {
  describe('initial value', () => {

    it('should be initialized with defaults', (done) => {
      const store = createSliceStore();

      const stateSnapshots$ = store.pipe(
        map((state) => {
          const value = selectors.selectAsyncCounterValue(state);
          const isLoading = selectors.selectAsyncCounterIsLoading(state);
          const stateSnapshot = { value, isLoading }
          return stateSnapshot;
        })
      );

      const incBy = 5;
      const expectedSnapshotValues = [
        { value: 100, isLoading: false },
        { value: 100, isLoading: true },
        { value: 105, isLoading: false },
      ];

      let i = 0;
      stateSnapshots$.subscribe((actualSnapshot) => {
        if (i >= expectedSnapshotValues.length) {
          throw new Error(`Unexpected state change ${JSON.stringify(actualSnapshot)}`);
        }
        expect(actualSnapshot).toEqual(expectedSnapshotValues[i]);
        i += 1;
        if (i >= expectedSnapshotValues.length) {
          done();
        }
      });

      store.dispatch(actions.incrementAsyncCounterRequest({ incBy }));

    });

    it('AFTER REFACTOR should be initialized with defaults', (done) => {
      const store = createSliceStore();

      const incBy = 5;
      const expectedSnapshotValues = [
        { value: 100, isLoading: false },
        // { value: 100, isLoading: true },
        // { value: 105, isLoading: false },
      ];

      expectStateChanges(
        store,
        expectedSnapshotValues,
        (state) => {
          const value = selectors.selectAsyncCounterValue(state);
          const isLoading = selectors.selectAsyncCounterIsLoading(state);
          const stateSnapshot = { value, isLoading }
          return stateSnapshot;
        },
        done
      );

      // store.dispatch(actions.incrementAsyncCounterRequest({ incBy }));
    });

    xit('should not be loading on init', (done) => {
      expect(true).toEqual(false);
    });
  });

  describe('async increment data flow', () => {
    xit('should increment value', (done) => {
      expect(true).toEqual(false);
    });

    xit('should decrement value and update updatedAt', (done) => {
      expect(true).toEqual(false);
    });

  });
});

function createSliceStore() {
  return createStore<ApplicationState>({
    reducers: { [asyncCounterFeatureKey]: reducer },
    effects: [effects.AsyncCounterEffects],
    providers: [CounterValuesService],
    imports: [HttpClientModule]
  });

}
