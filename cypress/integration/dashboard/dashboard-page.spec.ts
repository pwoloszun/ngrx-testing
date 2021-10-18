import { fullAppUrl } from '../helpers';

describe('Dashboard page', () => {

  it('should render root url', () => {
    cy.visitDashboard();
    const expectedUrl = fullAppUrl('/');
    cy.url().should('equal', expectedUrl);
  });

  it('should render Dashboard', () => {
    cy.visitDashboard();
    cy.contains('dashboard');
  });
});
