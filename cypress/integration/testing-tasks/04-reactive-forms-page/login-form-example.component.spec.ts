import { getMainNavigationContentAs, getMainPageContentAs } from 'cypress/integration/helpers';
import { selectMatOption, visitTestingTasksReactiveForms } from './helpers';

describe('login-form-example.component.component', () => {

  before(() => {
    visitTestingTasksReactiveForms();
  });

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

  xit('should succesfully login', () => {
    expect(true).to.deep.eq(false);
  });

  xit('should perform login form validations', () => {
    expect(true).to.deep.eq(false);
  });

});
