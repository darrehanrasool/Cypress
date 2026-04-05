/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Datepicker").click();
});
afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});
describe("ui component Automation ", () => {
  it("test for date pickers", () => {
    let dateobject = new Date();
    dateobject.setDate(dateobject.getDate() + 5);
    let futuredate = dateobject.getDate();
    let insertdate = `Apr ${futuredate}, 2026`;
    cy.get('[placeholder="Form Picker"]').then((item) => {
      cy.wrap(item).click();
      cy.get(".day-cell").not(".bounding-month").contains(futuredate).click();
      cy.wrap(item).should("have.value", insertdate);
    });
  });
});
