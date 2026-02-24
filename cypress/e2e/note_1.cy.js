/// <reference types="cypress" />
// it("name",()=>{})       first argument as name second argument as callback.
// describe("name",()=>{}) first argument as name second argument as callback.
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
});
describe("group 1", () => {
  it("darrehanrasool test 1", () => {
    console.log("hola from cypress!");
  });
  it("darrehanrasool test 2", () => {
    console.log("hola from cypress!");
  });
  it("darrehanrasool test 3", () => {
    console.log("hola from cypress!");
  });
});
describe("group 2", () => {
  it("darrehanrasool test 4", () => {
    console.log("hola from cypress!");
  });
  it("darrehanrasool test 5", () => {
    console.log("hola from cypress!");
  });
  it("darrehanrasool test 6", () => {
    console.log("hola from cypress!");
  });
});
describe("group 3", () => {
  it("darrehanrasool test 8", () => {
    console.log("hola from cypress!");
  });
  it("darrehanrasool test 9", () => {
    console.log("hola from cypress!");
  });
  it("darrehanrasool test 10", () => {
    console.log("hola from cypress!");
  });
});
