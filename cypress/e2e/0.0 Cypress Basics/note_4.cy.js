/// <reference types="cypress" />
// test hooks in cypress
// via space it's looking for decendent tag element.
// via direct child only gives the vibe of css selectors.
beforeEach("open web applications", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("test group 4", () => {
  it.only("darrehanrasool", () => {
    cy.contains("nb-card", "Form without labels").find(
      '[ placeholder="Subject"]',
    );
    cy.contains("nb-card", "Using the Grid", { matchCase: false })
      .find(".row")
      .contains("Option 1");
    cy.contains("nb-card", "Using the Grid", { matchCase: false })
      .find("nb-radio-group")
      .contains("Option 1");
    cy.get("nb-card nb-radio-group").contains("Option 1");
    cy.get("nb-card > nb-card-body [placeholder='Jane Doe']");
  });
});
