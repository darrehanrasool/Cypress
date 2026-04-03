/// <reference types="cypress" />
//test hooks in cypress
//contains will give you first match
//get will give all matches
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("test group 3", () => {
  it("darrehanrasool", () => {
    cy.contains("Sign in", { matchCase: false, timeout: 1000 });
    cy.contains('[status="warning"]', "Sign in");
    cy.contains("nb-card", "Form without labels");
    cy.contains("nb-card", "Form without labels").find("button");
    cy.contains("nb-card", "Form without labels").contains("Send");
    cy.contains("nb-card", "Form without labels").get("button");
  });
});
