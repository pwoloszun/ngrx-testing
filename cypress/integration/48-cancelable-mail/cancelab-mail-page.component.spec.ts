describe('cancelab-mail-page.component', () => {

  before(() => {
    // TODO
  });

  it.only('should successfully send cancelable and reversible mail', () => {
    // visit page
    cy.visit('/cancelable-mail');

    // click Create Mail btn
    cy.findByRole('button', { name: /Create Mail/i })
      .click();

    // wihin dialog click Send btn
    cy.findByRole('dialog')
      .within(() => {
        cy.findByRole('button', { name: /Send/i })
          .click();
      });

    //within snackbar text should contain /Sending/i
    cy.get('snack-bar-container')
      .should('have.length', 1)
      .within(() => {
        cy.findByText(/Sending/i);
        cy.findByRole('button', { name: /Cancel/i });
      });

    // ===
    //within snackbar text should contain /Mail has been sent/i
    // cy.get('snack-bar-container', { timeout: 5000 })
    //   .should('have.length', 1)
    //   .should('contain.text', 'Mail has been sent');
    waitUntilSnackbarContains(/Mail has been sent/i);

    cy.get('snack-bar-container')
      .should('have.length', 1)
      .within(() => {
        cy.findByText(/Mail has been sent/i);
        cy.findByRole('button', { name: /Revert/i });
      });

  });

  it.skip('should cancel sending mail', () => {
    expect(true).to.deep.eq(false);
  });

  it.skip('should revert sending mail', () => {
    expect(true).to.deep.eq(false);
  });

});

function visitCancelableMailPage() {
  // TODO
}

function waitUntilSnackbarContains(re: RegExp) {
  cy.waitUntil(() => {
    console.log('QQ waitUntil');
    return cy.get('snack-bar-container')
      .should('have.length', 1)
      .then(($snackbar) => {
        const text = $snackbar.text();
        return text.match(re) !== null;
      });
  });
}
