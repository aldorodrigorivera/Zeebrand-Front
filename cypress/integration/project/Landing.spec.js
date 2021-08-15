/// <reference types="cypress" />

describe("LANDING :: Initial render", () => {
    it("should show landing page :: /", () => {
        cy.visit("http://localhost:3000/");
        cy.contains("H1","Zeebrands");
        cy.get("[data-cy=btnGoLogin]").should("exist");
    })
});