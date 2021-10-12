import { SharedModule } from '@app/shared/shared.module';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { merge } from 'lodash';

import { HelloTestComponent } from './hello-test.component';

describe('HelloTestComponent', () => { // test case aka test suite

  it('should render component with its content', async () => {
    const props = generateProps();
    const { myName, btnClick } = props;
    await renderComponent(props);

    await screen.findByText(/Kate/i);
    await screen.findByText(/Stream msg: Mary/i);

    const greetingEl = screen.getByText(/Hello test!/i);
    const articleEl = screen.getByRole('article', { name: 'greeting details section', hidden: true });
    const detailedGreetings = within(articleEl).getByText(/Hello my friends!/i);
    screen.getByText(`Name: ${myName}`);

    const btn = screen.getByRole('button', { name: 'My Submit', hidden: true, exact: true });
    userEvent.click(btn);

    expect(btnClick?.emit).toHaveBeenCalled();
    expect(btnClick?.emit).toHaveBeenCalledWith('a qq!');
  });

  xit('should do smth when X', () => {
    expect(true).toEqual(false);
  });

});

type Props = Partial<HelloTestComponent>;
// helper functions
async function renderComponent(props: Props) {
  return render(HelloTestComponent, {
    componentProperties: props,
    imports: [SharedModule],
    // providers: [MyService]
  });
}

function generateProps(props: Props = {}): Props {
  const emit = () => { };
  const btnClick: any = { emit };
  jest.spyOn(btnClick, 'emit');

  const defaultProps: Props = {
    myName: 'bob',
    btnClick
  };
  return merge({}, defaultProps, props);
}
