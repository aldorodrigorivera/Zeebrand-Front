/// <reference types="cypress" />

describe("PRODUCTS :: Initial render", () => {

    it("should show products page :: /products", () => {
        cy.visit("http://localhost:3000/login");
        cy.get("#user").type("cypres@gmail.com");
        cy.get("#password").type("test");
        cy.get("[data-cy=btnSubmit]").click();
        cy.wait(2000);
        cy.get("#btnSubmit").should("exist");
        
    });

    it("should show logout :: /createProducts", () => {
        cy.visit("http://localhost:3000/login");
        cy.get("#user").type("cypres@gmail.com");
        cy.get("#password").type("test");
        cy.get("[data-cy=btnSubmit]").click();
        cy.wait(2000);
        cy.visit("http://localhost:3000/create-product");
        cy.contains("Registra nuevos productos");
    }); 

    it("should show logout :: /products", () => {
        cy.visit("http://localhost:3000/login");
        cy.get("#user").type("cypres@gmail.com");
        cy.get("#password").type("test");
        cy.get("[data-cy=btnSubmit]").click();
        cy.wait(2000);
        cy.get("#btnLogout").click();
        cy.wait(2000);
        cy.visit("http://localhost:3000/");
    }); 

});