export function visitTestingTasksReactiveForms() {
  cy.visit(`/testing-tasks/reactive-forms`);
}

export function selectMatOption(selectLabel: string | RegExp, optionText: string | RegExp) {
  cy.findByLabelText(selectLabel)
    .click();
  cy.findByText(optionText)
    .click();
}
