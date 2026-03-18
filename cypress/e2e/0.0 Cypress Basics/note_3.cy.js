/// <reference types="cypress" />
//test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
it.only("test 1 ", () => {
  // contains it will give you first match only , not all DOM elements.
  // get will still look for global buttons including the nb-card container.
  cy.contains("Sign in", { matchCase: false }, { timeout: 1000 });
  cy.contains('[status="warning"]', "Sign in");
  cy.contains("nb-card", "Form without labels");
  cy.contains("nb-card", "Form without labels").find("button");
  cy.contains("nb-card", "Form without labels").contains("Send");
  cy.contains("nb-card", "Form without labels").get("button");
});
