import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { PureCounterComponent } from './pure-counter.component';

describe('PureCounterComponent', () => {

  xit('should TODO', () => {
    expect(true).toEqual(false);
  });

});

type Props = Partial<PureCounterComponent>;
