import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { SharedModule } from '@app/shared/shared.module';

import { createEventEmitterSpy } from '../../../../../test/utils/create-spy';
import { PureOptionPickerComponent } from './pure-option-picker.component';

describe('PureOptionPickerComponent', () => {

  it('should render input title & button for each input item', async () => {
    const props = generateProps({
      title: 'my test title'
    });
    const { items } = props;
    await renderComponent(props);

    await screen.findByText(/my test title/i);

    const itemButtons = await screen.findAllByRole('button', { hidden: true });

    expect(itemButtons.length).toEqual(items!.length);

    items!.forEach((item, index) => {
      const btn = itemButtons[index];
      expect(btn).toHaveTextContent(item.text);
    });

    // expect(true).toEqual(false);
  });

  xit('should not select button for undefined selectedItem prop', () => {
    expect(true).toEqual(false);
  });

  xit('should select button for defined selectedItem prop', () => {
    expect(true).toEqual(false);
  });

  fit('should emit "itemSelect" event on button click', async () => {
    const props = generateProps();
    const { items, itemSelect } = props;
    await renderComponent(props);

    const itemButtons = await screen.findAllByRole('button', { hidden: true });
    const index = 2;
    userEvent.click(itemButtons[index]);

    expect(itemSelect!.emit).toHaveBeenCalledTimes(1);
    expect(itemSelect!.emit).toHaveBeenCalledWith(items![index]);
  });

});

type Props = Partial<PureOptionPickerComponent<any>>;

async function renderComponent(componentProperties: Props = {}) {
  await render(PureOptionPickerComponent, {
    componentProperties,
    imports: [
      SharedModule
    ]
  });
}

function generateProps(props: Props = {}): Props {
  const title = 'some title';
  const items = [
    { id: 100, text: 'first item' },
    { id: 200, text: 'second item' },
    { id: 300, text: 'third item' },
    { id: 400, text: 'fourth item' },
    { id: 500, text: 'fifth item' },
  ];

  const selectedItem = undefined;

  const itemSelect = createEventEmitterSpy();
  const defaultProps: Props = {
    title,
    items,
    selectedItem,
    itemSelect
  };
  return merge({}, defaultProps, props);
}
