import { visitSmartComponentsPage } from './helpers';

describe('smart-real-estate-details-card.component', () => {

  xit('should render async card details if REQ SUCCESSFUL', () => {
    visitSmartComponentsPage();
    // cy.intercept()
    expect(true).to.deep.eq(false);

  });

  it('should render error if any Error', () => {
    cy.intercept(
      { method: 'GET', path: '/api/real-estates/*' },
      { statusCode: 400 }
    );

    visitSmartComponentsPage();

    cy.findByText(/Error/i);
  });

});
