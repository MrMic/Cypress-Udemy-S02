/// <reference types="Cypress" />

describe("Tasks page", () => {
  it("should render the mainimage", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".main-header img").should("be.visible");
  });
});
