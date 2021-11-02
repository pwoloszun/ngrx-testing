import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { spy } from 'sinon';

import { SharedModule } from '@shared/shared.module';
import { MyCounterComponent } from './my-counter.component';
import { merge } from 'lodash';


describe('MyCounterComponent', () => {

  describe('@Inputs()', () => {

    it('should render label', async () => {
      const label = 'my label';
      const value = 123;

      const props = generateProps({ label, value });
      await renderComponent(props);

      const labelEl = await screen.findByText(/my label/i, {}, { timeout: 1000 });

      await screen.findByText(/123/i);

      // expect(labelEl).toBeInTheDocument();
    });

    xit('should render value', async () => {
      // await renderComponent();

      // await screen.findByText(/20/i);
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

async function renderComponent(props: any) {
  return render(MyCounterComponent, {
    componentProperties: props
  });
}

function generateProps(props = {}) {
  const defaultProps = {
    label: 'default label',
    value: 100,
  };
  return merge({}, defaultProps, props);
}
