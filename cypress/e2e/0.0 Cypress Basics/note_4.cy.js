/// <reference types="cypress" />
//test hooks in cypress
beforeEach("open web applications", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
describe("first group 1", () => {
  it.only("first test 1", () => {
    cy.contains("nb-card", "Form without labels").find(
      '[ placeholder="Subject"]',
    );
    cy.contains("nb-card", "Using the Grid", { matchCase: false })
      .find(".row")
      .contains("Option 1");
    cy.contains("nb-card", "Using the Grid", { matchCase: false })
      .find("nb-radio-group")
      .contains("Option 1");
    // via space it's looking for decendent tag element.
    cy.get("nb-card nb-radio-group").contains("Option 1");
    // via direct child only gives the vibe of css selectors.
    cy.get("nb-card > nb-card-body [placeholder='Jane Doe']");
  });
});
