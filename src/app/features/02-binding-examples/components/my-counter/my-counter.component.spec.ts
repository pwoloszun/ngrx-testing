import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { spy } from 'sinon';

import { SharedModule } from '@shared/shared.module';
import { MyCounterComponent } from './my-counter.component';

describe('MyCounterComponent', () => {

  describe('@Inputs()', () => {

    xit('should render label', () => {
      expect(false).toEqual(true);
    });

    xit('should render value', () => {
      expect(false).toEqual(true);
    });

    xit('should render default value if undefined', () => {
      expect(false).toEqual(true);
    });

  });

  describe('@Outputs()', () => {

    xit('should be called with current value on increment button click', () => {
      expect(false).toEqual(true);
    });

    xit('should increment value by 1', () => {
      expect(false).toEqual(true);
    });

  });
});
