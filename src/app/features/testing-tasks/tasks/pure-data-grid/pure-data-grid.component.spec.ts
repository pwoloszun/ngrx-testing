import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { PureDataGridComponent } from './pure-data-grid.component';

describe('PureDataGridComponent', () => {

  xit('should render grid headers', () => {
    expect(true).toEqual(false);
  });

  xit('should render grid rows', () => {
    expect(true).toEqual(false);
  });

  xit('should not select any row if selectedItem prop undefined', () => {
    expect(true).toEqual(false);
  });

  xit('should select row related to selectedItem prop', () => {
    expect(true).toEqual(false);
  });

  xit('should emit "itemClick" event on data row click', () => {
    expect(true).toEqual(false);
  });
});

type Props = Partial<PureDataGridComponent<any>>;

  // const items = [
  //   { id: 100, secretIdentity: 'Peter Parker', name: 'Spider-Man' },
  //   { id: 200, secretIdentity: 'Bruce', name: 'Batman' },
  //   { id: 300, secretIdentity: 'Clark', name: 'Superman' },
  // ];

  // const metaData = [
  //   { text: 'Hero Name', value: 'name' },
  //   { text: 'Hero ID', value: 'id' },
  // ];

