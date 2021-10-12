import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { SharedModule } from '@app/shared/shared.module';

import { PureOptionPickerComponent } from './pure-option-picker.component';

describe('PureOptionPickerComponent', () => {

  it('should render input title', async () => {
    const props = generatePropos({ title: 'imba!' });

    await renderComponent(props);

    screen.getByText(/imba!/i);
  });

  it('should render button for each input item', async () => {
    const props = generatePropos();
    const { items = [] } = props;

    await renderComponent(props);

    const buttons = screen.getAllByRole('button', { hidden: true });

    expect(buttons.length).toEqual(items.length);
    items.forEach((item, i) => {
      const btn = buttons[i];
      // expect(btn.textContent).toContain(item.text);
      expect(btn).toHaveTextContent(item.text);
    });
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

async function renderComponent(props: Props) {
  return render(PureOptionPickerComponent, {
    componentProperties: props,
    imports: [SharedModule]
  });
}

function generatePropos(props: Props = {}): Props {
  const title = 'mickey mouse';
  const items = [
    { id: 100, text: 'first item' },
    { id: 200, text: 'second item' },
    { id: 300, text: 'third item' },
    { id: 400, text: 'fourth item' },
    { id: 500, text: 'fifth item' },
  ];
  const selectedItem = undefined;
  const itemSelect = undefined;
  const defaultProps = {
    title,
    items,
    selectedItem,
    itemSelect
  };
  return merge({}, defaultProps, props);
}
