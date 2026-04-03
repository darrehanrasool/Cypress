/// <reference types="cypress" />
// test hooks in cypress
// custom drop down
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Toastr").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("ui component Automation", () => {
  it("Custom Drop Down", () => {
    cy.contains("div", "Position:").find("nb-select").click();
    cy.get(".option-list").contains("top-left").click();
    cy.contains("div", "Position:")
      .find("nb-select")
      .should("have.text", "top-left");

    // example of loop ie iteration
    // open drop down for click again
    cy.contains("div", "Position:")
      .find("nb-select")
      .then((dropdown) => {
        cy.wrap(dropdown).click();
        cy.get(".option-list nb-option").each((item, index, list) => {
          cy.wrap(item).click();
          if (index < list.length - 1) {
            cy.wrap(dropdown).click();
          }
        });
      });
  });
});
