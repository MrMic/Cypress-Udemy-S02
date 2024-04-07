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
    cy.get(".modal").should("not.exist");
    // ______________________________________________________________________
    cy.contains("Add Task").click();
    cy.contains("Cancel").click();
    cy.get(".modal").should("not.exist");
    cy.get(".backdrop").should("not.exist");
  });
  // ______________________________________________________________________
  it("should create a new task", () => {
    cy.contains("Add Task").click();
    cy.get(".modal").should("be.visible");
    cy.get("#title").type("Test task");
    cy.get("#summary").type("This is a test task");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
    cy.get(".task").should("have.length", 1);
    cy.get(".task h2").contains("Test task");
    cy.get(".task p").contains("This is a test task");
  });
  // ______________________________________________________________________
  it("should validate user input", () => {
    cy.contains("Add Task").click();
    cy.get(".modal").contains("Add Task").click();
    cy.contains("Please provide values");
  });
  // ______________________________________________________________________
  it("should filter tasks", () => {
    cy.contains("Add Task").click();
    cy.get("#title").type("New task");
    cy.get("#summary").type("Some description");
    cy.get("#category").select("urgent");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("moderate");
    cy.get(".task").should("have.length", 0);
    cy.get("#filter").select("urgent");
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("all");
    cy.get(".task").should("have.length", 1);
  });
});
