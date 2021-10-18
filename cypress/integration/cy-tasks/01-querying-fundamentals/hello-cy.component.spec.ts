// import { visitQueryingPage } from './helpers';
import { interval } from 'rxjs';

describe('cy tasks: querying fundamentals > HelloCy component', () => {

  before(() => {
    // TODO refactor
  });

  it('should render page heading', () => {
    cy.visit('/cy-tasks/querying');

    cy.findByText(/Hello Cy/i)
      .should('exist')
      .should('be.visible')
      .then(($h3El) => {
        console.log('then qq:', $h3El);
        expect($h3El).to.have.length(1);
        // return 123;
      });

    cy.wrap(true)
      .should('deep.equal', true);

  });

  xit('should render page heading', () => {
    expect(true).to.deep.eq(false);
  });

  xit('should mutate list item on btn click', () => {
    expect(true).to.deep.eq(false);
  });

});
