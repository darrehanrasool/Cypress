/// <reference types="cypress" />
// test hooks in cypress
// custom drop down
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Toastr").click();
});
describe("ui component Automation", () => {
  it("Custom Drop Dowm", () => {
    cy.contains("div", "Position:").find("nb-select").click();
    cy.get(".option-list").contains("top-left").click();
    cy.contains("div", "Position:")
      .find("nb-select")
      .should("have.text", "top-left");

    // example of loop ie iteration
    cy.contains("div", "Position:")
      .find("nb-select")
      .then((dropdown) => {
        cy.wrap(dropdown).click();
        cy.get(".option-list nb-option").each((item, index, list) => {
          cy.wrap(item).click();
          if (index < list.length - 1) {
            // open drop down for click again
            cy.wrap(dropdown).click();
          }
        });
      });
  });
});
