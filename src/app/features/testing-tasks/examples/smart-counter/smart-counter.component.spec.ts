import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { SmartCounterComponent } from './smart-counter.component';

describe('SmartCounterComponent', () => {

  xit('should TODO', () => {
    expect(true).toEqual(false);
  });

});

type Props = Partial<SmartCounterComponent>;
