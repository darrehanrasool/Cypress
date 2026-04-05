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
    function Datepicker(day) {
      let dateobject = new Date();
      dateobject.setDate(dateobject.getDate() + day);
      let futuredate = dateobject.getDate();
      let longmonth = dateobject.toLocaleDateString("en-US", { month: "long" });
      let shortmonth = dateobject.toLocaleDateString("en-US", {
        month: "short",
      });
      let futureyear = dateobject.getFullYear();
      let insertdate = `${shortmonth} ${futuredate}, 2026`;

      cy.get("nb-calendar-view-mode")
        .invoke("text")
        .then((value) => {
          if (!value.includes(longmonth) || !value.includes(futureyear)) {
            cy.get('[data-name="chevron-right"]').click();
            Datepicker(day);
          } else {
            cy.get(".day-cell")
              .not(".bounding-month")
              .contains(futuredate)
              .click();
          }
        });
      return insertdate;
    }

    cy.get('[placeholder="Form Picker"]').then((item) => {
      cy.wrap(item).click();
      let insertdate = Datepicker(200);
      cy.wrap(item).should("have.value", insertdate);
    });
  });
});
