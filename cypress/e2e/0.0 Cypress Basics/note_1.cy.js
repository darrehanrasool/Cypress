/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
// describe("name",()=>{}) first argument as name, second argument as callback.
// it("name",()=>{})       first argument as name, second argument as callback.
describe("group 1", () => {
  it.only("darrehanrasool test 1", () => {
    console.log("hola from cypress!");
  });
  it("darrehanrasool test 2", () => {
    console.log("hola from cypress!");
  });
  it("darrehanrasool test 3", () => {
    console.log("hola from cypress!");
  });
});
