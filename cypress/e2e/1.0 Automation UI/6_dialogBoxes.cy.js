/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Tables & Data").click();
  cy.contains("Smart Table").click();
});
afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});
describe("ui component Automation", () => {
  it("Dialog Box", () => {
    // option 1
    cy.get(".nb-trash").first().click();
    cy.on("window:confirm", (item) => {
      expect(item).to.be.equal("Are you sure you want to delete?");
    });
    // option 2
    cy.window().then((win) => {
      cy.stub(win, "confirm").as("dialogBox").returns(false);
    });
    cy.get(".nb-trash").first().click();
    cy.get("@dialogBox").should(
      "be.calledWith",
      "Are you sure you want to delete?",
    );
  });
});
