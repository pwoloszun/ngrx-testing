import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {

  describe('@Inputs', () => {

    it('should render row for each item', async () => {
      const props = generateDataTableInputs();
      const { items, metaData } = props;

      await renderComponent(props);

      const dataRowEls = await findAllDataRowsWithinTable();
      expect(dataRowEls.length).toEqual(items.length);

      items.forEach((item, index) => {
        const { name, age } = item;
        const rowEl = dataRowEls[index];
        expect(rowEl).toHaveTextContent(name);
        expect(rowEl).toHaveTextContent(`${age}`);
      });
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

function generateDataTableInputs(inputs = {}, selectedItemIndex?: number) {
  const items = [
    { id: 100, name: 'bob', age: 12 },
    { id: 200, name: 'ed', age: 34 },
    { id: 300, name: 'kate', age: 97 },
  ];
  const metaData = [
    { value: 'age', text: 'User Age' },
    { value: 'name', text: 'Full Name' },
  ];
  const selectedItem = selectedItemIndex !== undefined ? items[selectedItemIndex] : null;
  const defaultInputs = { items, metaData, selectedItem };
  return merge({}, defaultInputs, inputs);
}

async function findAllDataRowsWithinTable() {
  const tableEl = await screen.findByRole('table', { hidden: true });
  const tbodyEl = await within(tableEl).findByRole('rowgroup', { name: /Data Table Body/i, hidden: true });
  return within(tbodyEl).findAllByRole('row', { hidden: true });
}
