/// <reference types="Cypress" />

describe("Tasks management", () => {
  // ______________________________________________________________________
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  // ______________________________________________________________________
  it("should open and close the new task model", () => {
    cy.contains("Add Task").click();
    cy.get(".modal").should("be.visible");
    cy.get(".backdrop").click({ force: true });
    cy.get(".backdrop").should("not.exist");
  });
});
