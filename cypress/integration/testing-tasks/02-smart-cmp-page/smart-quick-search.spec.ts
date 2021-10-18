import { visitSmartComponentsPage } from './helpers';

describe('smart-quick-search.component', () => {

  before(() => {
    visitSmartComponentsPage();
  });

  it.only('should perform quick search', () => {
    const pagePath = '/testing-tasks/smart-components';
    const playersFixturePath = 'testing-tasks/02-smart-cmp-page/players.json';

    cy.fixture(playersFixturePath)
      .as('playersJson');

    cy.intercept(
      { method: 'GET', path: '/api/players?q=*' },
      { fixture: playersFixturePath }
    ).as('fetchPlayersRequest');

    // enter page
    cy.visit('/testing-tasks/smart-components');

    // type search query into search field
    cy.findByLabelText(/Search/i)
      .type('some search txt');

    // check progressbar rendered
    cy.findByRole('progressbar');

    // wait for request
    cy.wait('@fetchPlayersRequest');

    // check progressbar not rendered
    cy.findByRole('progressbar')
      .should('not.exist');

    // check 'Search results' renderd
    cy.findByText(/Search results/i)
      .should('be.visible');

    // list, listitem within

    // assert listitems count === playersJson.length

    // forEach: listitem.textContent "contains" playersJson[i].last_name
    // forEach: listitem.textContent "contains" playersJson[i].first_name


  });

});
