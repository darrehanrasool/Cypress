/// <reference types="cypress" />
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layout").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("ui component Automation", () => {
  it("radio buttons", () => {
    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then((allRadioButtons) => {
        // Example Number 1
        cy.wrap(allRadioButtons.eq(0))
          .check({ force: true })
          .should("be.checked");
        // Example Number 2
        cy.wrap(allRadioButtons.eq(1))
          .check({ force: true })
          .should("be.checked");
        // Example Number 3
        cy.wrap(allRadioButtons.eq(0)).should("not.be.checked");
        // Example Number 4
        cy.wrap(allRadioButtons.eq(2)).should("be.disabled");
        // Example Number 5
        cy.contains("nb-card", "Using the Grid").contains("Option 1").click();
        // Example Number 6
        cy.contains("label", "Option 1").find("input").check();
      });
  });
});
