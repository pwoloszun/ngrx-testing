describe('cancelab-mail-page.component', () => {

  before(() => {
    // TODO
  });

  it.only('should successfully send cancelable and reversible mail', () => {
    // visit page

    // click Create Mail btn

    // wihin dialog click Send btn


    //within snackbar text should contain /Sending/i
    // cy.get('snack-bar-container')
    //   .should('have.length', 1);

    // ===
    //within snackbar text should contain /Mail has been sent/i


    expect(true).to.deep.eq(false);
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
