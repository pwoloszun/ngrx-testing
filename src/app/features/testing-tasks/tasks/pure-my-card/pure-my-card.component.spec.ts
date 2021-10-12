import { render, screen } from '@testing-library/angular';

import { PureMyCardComponent } from './pure-my-card.component';

describe('PureMyCardComponent', () => {

  xit('should render all slots', () => {
    expect(true).toEqual(false);
  });

});

const template = `
<nts-pure-my-card>
  <div slot="header">
    <h3>big header</h3>
  </div>

  <div slot="footer">my footer</div>

  <div slot="content">
    <p>content test</p>
  </div>
</nts-pure-my-card>
`;
