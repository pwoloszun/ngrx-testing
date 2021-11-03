import { render, screen, within } from '@testing-library/angular';
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

      await screen.findByText(/my label/i, {}, { timeout: 1000 });

      await screen.findByText(/123/i);

      await screen.findByRole('button', { name: /Increment/i, hidden: true });
    });

    it('RESTRICTED should render label', async () => {
      const label = 'my label';
      const value = 123;

      const props = generateProps({ label, value });
      await renderComponent(props);

      const headingEl = await screen.findByRole('heading', { name: /Label Heading/i, hidden: true });

      await within(headingEl).findByText(/my label/i);

      await screen.findByRole('button', { name: /Increment/i, hidden: true });
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

    it('should be called with current value on increment button click', async () => {
      const props = generateProps({
        value: 123
      });
      const { increment } = props;
      await renderComponent(props);

      const btnEl = await screen.findByRole('button', { name: /Increment/i, hidden: true });
      userEvent.click(btnEl);

      expect(increment.emit).toHaveBeenCalledTimes(1);
      expect(increment.emit).toHaveBeenCalledWith(124);
    });

    xit('should increment value by 1', () => {
      expect(false).toEqual(true);
    });

  });
});

async function renderComponent(props?: any) {
  return render(MyCounterComponent, {
    componentProperties: props
  });
}

function generateProps(props = {}) {
  const incrementSpy = {
    emit(...args: any[]) { }
  };
  jest.spyOn(incrementSpy, 'emit');

  const defaultProps = {
    label: 'default label',
    value: 100,
    increment: incrementSpy
  };
  return merge({}, defaultProps, props);
}
