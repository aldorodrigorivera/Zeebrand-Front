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

        cy.get("#btnSubmit").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe un nombre del producto");
        cy.get(".swal2-confirm").click();

        cy.get("#name").type("TestName");
        cy.get("#btnSubmit").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe la marca del producto");
        cy.get(".swal2-confirm").click();

        cy.get("#brand").type("Testbrand");
        cy.get("#btnSubmit").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe un precio mayor a $100 MXN");
        cy.get(".swal2-confirm").click();

        cy.get("#price").clear().type(300);
        cy.get("#btnSubmit").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe la url de la imagen del producto");
        cy.get(".swal2-confirm").click();
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