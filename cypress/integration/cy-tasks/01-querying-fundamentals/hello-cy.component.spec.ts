// import { visitQueryingPage } from './helpers';
import { interval } from 'rxjs';
import { getMainNavigationContentAs, getMainPageContentAs } from '../../helpers';

describe('cy tasks: querying fundamentals > HelloCy component', () => {


  xit('should TD', () => {
    getMainNavigationContentAs('mainNav');

    getMainPageContentAs('mainContent');

    cy.get('@mainNav')
      .within(() => {

      });
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

  it('should mutate list item on btn click', () => {
    cy.visit('/cy-tasks/querying');

    cy.findByRole('list', { name: 'Hello Cy Messages' })
      .as('messagesList') // create alias
      .within(() => {
        cy.findAllByRole('listitem')
          .its('length')
          .should('eq', 4);
      });

    cy.findByRole('button', { name: /Mutate index/i })
      .click();

    // cy.get('@messageListItems')
    cy.findByRole('list', { name: 'Hello Cy Messages' })
      .within(() => {
        cy.findAllByRole('listitem')
          .should('be.visible')
          .its('length')
          .should('eq', 4);
      });
  });

  it('should mutate list item on btn click 1st REFACTOR', () => {
    cy.visit('/cy-tasks/querying');

    messagesListShouldHaveItemsCount(4);

    cy.findByRole('button', { name: /Mutate index/i })
      .click();

    messagesListShouldHaveItemsCount(4);
  });

  it('should mutate list item on btn click 2nd REFACTOR', () => {
    cy.visit('/cy-tasks/querying');

    findMessagesListItems(($listItems: any) => {
      expect($listItems.length).to.eq(4);
    });

    cy.findByRole('button', { name: /Mutate index/i })
      .click();

    findMessagesListItems(($listItems: any) => {
      expect($listItems.length).to.eq(4);
    });
  });

});

function messagesListShouldHaveItemsCount(n: number) {
  findMessagesListItems(($listItems: any) => {
    expect($listItems.length).to.eq(4);
  });
}

function findMessagesListItems(fn: Function) {
  cy.findByRole('list', { name: 'Hello Cy Messages' })
    .within(() => {
      cy.findAllByRole('listitem')
        .should('be.visible')
        .then(fn as any);
    });
}
