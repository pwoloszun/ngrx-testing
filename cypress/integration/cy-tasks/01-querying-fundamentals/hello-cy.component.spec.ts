// import { visitQueryingPage } from './helpers';
import { interval } from 'rxjs';

describe('cy tasks: querying fundamentals > HelloCy component', () => {

  before(() => {
    // TODO refactor
  });

  it('should render page heading', () => {
    cy.visit('/cy-tasks/querying');

    cy.findByText(/Hello Cy/i)
      .scrollIntoView()
      .should('be.visible')
      .then(($h3El) => {
        console.log('then qq:', $h3El);
        expect($h3El).to.have.length(1);
        // return 123;
      });

    cy.wrap(true)
      .should('deep.equal', true);

  });

  it.only('should mutate list item on btn click', () => {
    cy.visit('/cy-tasks/querying');

    cy.findByRole('button', { name: /Mutate index/i })
      .click();

    cy.findByRole('list', { name: 'Hello Cy Messages' })
      .within(() => {
        cy.findAllByRole('listitem')
          .its('length')
          .should('eq', 4);
        // cy.findAllByRole('listitem')
        //   .then(($listItems) => {
        //     expect($listItems.length).to.eq(4);
        //   });
      });
  });

});
