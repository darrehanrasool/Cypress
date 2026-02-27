/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
it("first test ", () => {
  //   via tag
  cy.get(`input`);
  //   via class
  cy.get(`.nb-transition`);
  //   via id
  cy.get(`#inputEmail1`);
  //   via attribute
  cy.get(`[type]`);
  //   via attribute exact match
  cy.get(`[type="email"]`);
  //   via attribute exact match
  cy.get(`[data-cy="inputEmail1"]`);
  //   via attribute exact match
  cy.get(
    `[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]`,
  );
  //   via selectors no space single expresssion
  cy.get(`input#inputEmail1.nb-transition[type="email"]`);
});
