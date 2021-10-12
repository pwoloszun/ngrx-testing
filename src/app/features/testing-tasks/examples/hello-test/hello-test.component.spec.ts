import { SharedModule } from '@app/shared/shared.module';
import { render, screen, within } from '@testing-library/angular';
import { merge } from 'lodash';

import { HelloTestComponent } from './hello-test.component';


describe('HelloTestComponent', () => { // test case aka test suite

  fit('should render greeting text', async () => { //
    await renderComponent();

    const greetingEl = screen.getByText(/Hello test!/i);
    const btn = screen.getByRole('button', { name: 'My Submit', hidden: true, exact: true });
    const articleEl = screen.getByRole('article', { name: 'greeting details section', hidden: true });
    const detailedGreetings = within(articleEl).getByText(/Hello my friends!/i);
  });

  it('should do smth when X', () => {

    // const props = generateProps({ name: 'Batman' });
    // const { name } = props;
    // const component = renderComponent(props);

    // expect(component.rtenderedName).toEqual('Batman');
    expect(true).toEqual(false);
  });

});


// helper functions
async function renderComponent() {
  return render(HelloTestComponent, {
    imports: [SharedModule],
  });
}

function generateProps(props: any = {}): any {
  const defaultProps: any = {
    name: 'bob',
    age: 133,
    children: []
  };
  return merge({}, defaultProps, props);
}
