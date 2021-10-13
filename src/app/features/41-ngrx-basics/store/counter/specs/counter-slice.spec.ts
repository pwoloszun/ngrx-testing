import { select } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { createStore } from 'src/test/utils/create-store';

import { reducer, counterFeatureKey, selectors, ApplicationState, actions } from '../index';

describe('Counter slice', () => {
  describe('initial value', () => {
    xit('should set initial value to 0', (done) => {
      const store = createSliceStore();

      expect(true).toEqual(false);
    });

    xit('should set initial updatedAt to null', (done) => {
      expect(true).toEqual(false);
    });
  });

  describe('IncrementCounter action', () => {
    xit('should increment value and update updatedAt', (done) => {
      expect(true).toEqual(false);
    });

    xit('should decrement value and update updatedAt', (done) => {
      // TODO
      expect(true).toEqual(false);
    });

  });
});

function createSliceStore() {
  return createStore<ApplicationState>({
    reducers: {
      [counterFeatureKey]: reducer,
    }
  });
}
