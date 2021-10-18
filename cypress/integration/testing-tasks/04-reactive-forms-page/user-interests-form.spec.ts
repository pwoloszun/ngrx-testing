import { selectMatOption, visitTestingTasksReactiveForms } from './helpers';

describe('user-interests-form.component', () => {

  before(() => {
    visitTestingTasksReactiveForms();
  });

  it.only('should select mat select option', () => {
    const path = '/testing-tasks/reactive-forms';

    selectMatOption(/Select Your Country/i, /USA/i);

    cy.findByLabelText(/Select Your Country/i)
      .should('have.text', 'USA');

    expect(true).to.deep.eq(false);
  });

  xit('should send form data to server', () => {
    expect(true).to.deep.eq(false);
  });

});
