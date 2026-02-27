/// <reference types="cypress" />
//test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
it.only("test 1 ", () => {
  // it will give you first match only.
  cy.contains("Sign in", { matchCase: false });
  cy.contains('[status="warning"]', "Sign in");
  cy.contains("nb-card", "Form without labels");
  cy.contains("nb-card", "Form without labels").find("button");
  cy.contains("nb-card", "Form without labels").contains("Send");
  // get will still look for global buttons not only within the nb-card container
  cy.contains("nb-card", "Form without labels").get("button");
});
