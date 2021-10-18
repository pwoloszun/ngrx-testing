import { getMainNavigationContentAs, getMainPageContentAs } from 'cypress/integration/helpers';

describe('reactive-forms-page.component', () => {

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
