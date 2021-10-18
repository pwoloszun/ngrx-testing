import { getMainNavigationContentAs, getMainPageContentAs } from 'cypress/integration/helpers';

describe('login-form-example.component.component', () => {

  xit('should TD', () => {
    getMainNavigationContentAs('mainNav');

    getMainPageContentAs('mainContent');

    cy.get('@mainNav')
      .within(() => {
        //...
      });
  });

  it.only('should manually navigate to reactive forms page', () => {
    expect(true).to.deep.eq(false);
  });

});
