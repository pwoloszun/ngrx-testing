import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {

  describe('@Inputs', () => {
    fit('should render row for each item', async () => {
      const props = generateDataTableInputs();
      const { items } = props;
      await renderComponent(props);

      const dataRowEls = await findAllDataRowsWithinTable();

      expect(dataRowEls.length).toEqual(items.length);
    });

    xit('should sort cells in metaData order', async () => {
      expect(false).toEqual(true);
    });

    xit('should highlight selected item', async () => {
      expect(false).toEqual(true);
    });

    xit('should highlight nothing if selectedItem undefined', async () => {
      expect(false).toEqual(true);
    });
  });

  describe('@Outputs()', () => {
    xit('should emit item linked with clicked row', async () => {
      expect(false).toEqual(true);
    });
  });
});

async function renderComponent(props = {}) {
  return render(DataTableComponent, {
    componentProperties: props
  });
}

function generateDataTableInputs(inputs = {}) {
  const items = [
    { id: 100, name: 'bob', age: 12 },
    { id: 200, name: 'ed', age: 34 },
    { id: 300, name: 'kate', age: 97 },
  ];
  const metaData = [
    { value: 'age', text: 'User Age' },
    { value: 'name', text: 'Full Name' },
  ];
  const selectedItem = null;
  const defaultInputs = { items, metaData, selectedItem };
  return merge({}, defaultInputs, inputs);
}

async function findAllDataRowsWithinTable() {
  const tableEl = await screen.findByRole('table', { hidden: true });
  const allRowEls = await within(tableEl).findAllByRole('row', { hidden: true });
  return allRowEls.slice(1);
}
