import { SharedModule } from '@app/shared/shared.module';
import { render, screen, within } from '@testing-library/angular';
import { merge } from 'lodash';

import { HelloTestComponent } from './hello-test.component';


describe('HelloTestComponent', () => { // test case aka test suite

  fit('should render greeting text', async () => {
    const props = generateProps();
    const { myName } = props;
    await renderComponent(props);

    const greetingEl = screen.getByText(/Hello test!/i);
    const btn = screen.getByRole('button', { name: 'My Submit', hidden: true, exact: true });
    const articleEl = screen.getByRole('article', { name: 'greeting details section', hidden: true });
    const detailedGreetings = within(articleEl).getByText(/Hello my friends!/i);

    screen.getByText(`Name: ${myName}`);

  });

  it('should do smth when X', () => {

    // const props = generateProps({ name: 'Batman' });
    // const { name } = props;
    // const component = renderComponent(props);

    // expect(component.rtenderedName).toEqual('Batman');
    expect(true).toEqual(false);
  });

});

type Props = Partial<HelloTestComponent>;
// helper functions
async function renderComponent(props: Props) {
  return render(HelloTestComponent, {
    componentProperties: props,
    imports: [SharedModule],
  });
}

function generateProps(props: Props = {}): Props {
  const defaultProps: Props = {
    myName: 'bob',
  };
  return merge({}, defaultProps, props);
}
