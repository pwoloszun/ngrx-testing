import { visitSmartComponentsPage } from './helpers';

describe('smart-quick-search.component', () => {

  before(() => {
    visitSmartComponentsPage();
  });

  it.only('should perform quick search', () => {
    const pagePath = '/testing-tasks/smart-components';

    // enter page
    // type search query into search field
    // check progressbar rendered
    // wait for request
    // check progressbar not rendered
    // check 'Search results' renderd

    cy.findByText('costam')
      .should('not.exist');
    // .type('asasa')

    const playersFixturePath = 'testing-tasks/02-smart-cmp-page/players.json';
    expect(true).to.deep.eq(false);
  });

});
