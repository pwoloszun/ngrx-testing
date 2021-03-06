import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { PureOptionPickerComponent } from './pure-option-picker.component';

describe('PureOptionPickerComponent', () => {

  xit('should render input title', () => {
    expect(true).toEqual(false);
  });

  xit('should render button for each input item', () => {
    expect(true).toEqual(false);
  });

  xit('should not select button for undefined selectedItem prop', () => {
    expect(true).toEqual(false);
  });

  xit('should select button for defined selectedItem prop', () => {
    expect(true).toEqual(false);
  });

  xit('should emit "itemSelect" event on button click', () => {
    expect(true).toEqual(false);
  });

});

type Props = Partial<PureOptionPickerComponent<any>>;

// const items = [
//   { id: 100, text: 'first item' },
//   { id: 200, text: 'second item' },
//   { id: 300, text: 'third item' },
//   { id: 400, text: 'fourth item' },
//   { id: 500, text: 'fifth item' },
// ];
