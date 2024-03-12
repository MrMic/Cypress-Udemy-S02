/// <reference types="Cypress" />

describe("Tasks page", () => {
  // ______________________________________________________________________
  it("should render the main image", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".main-header img").should("be.visible");
    // cy.get(".main-header").find("img").should("be.visible"); // NOTE: same as before
  });

  // ______________________________________________________________________
  it("should display the page title", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains("My Cypress Course Tasks");
  });
});
