import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { PureCounterComponent } from './pure-counter.component';

describe('PureCounterComponent', () => {

  it('should render counter with received value', async () => {
    const props = generateProps({ value: 123 });
    await renderCompoonent(props);

    const valueEl = await screen.findByText(/Value:/i);

    expect(valueEl).toHaveTextContent(/Value: 123/i);
    // expect(true).toEqual(false);
  });

  xit('should TODO1', () => {
    expect(true).toEqual(false);
  });

});

type Props = Partial<PureCounterComponent>;

async function renderCompoonent(componentProperties: Props) {
  await render(PureCounterComponent, {
    componentProperties
  });
}

function generateProps(props: Props = {}): Props {
  const value = 200;
  // const increment: any = () => { };
  const defaultProps: Props = {
    value,
    // increment,
  };
  return merge({}, defaultProps, props);
}
