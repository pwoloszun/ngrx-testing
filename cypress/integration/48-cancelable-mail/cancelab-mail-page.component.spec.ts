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
      });

    // ===
    //within snackbar text should contain /Mail has been sent/i

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
  // TODO
}
