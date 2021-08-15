/// <reference types="cypress" />
        //.swal2-cancel

describe("PRODUCT DETAUL :: Initial render", () => {
    it("should show product detail page :: /", () => {
        cy.visit("http://localhost:3000/login");
        cy.get("#user").type("cypres@gmail.com");
        cy.get("#password").type("test");
        cy.get("[data-cy=btnSubmit]").click();
        cy.wait(2000);
        cy.visit("http://localhost:3000/products/Dsy7Cjxddd");
        cy.get("#sku").should("exist");
    });

    it("should show product show edit popup dialog :: /", () => {
        cy.visit("http://localhost:3000/login");
        cy.get("#user").type("cypres@gmail.com");
        cy.get("#password").type("test");
        cy.get("[data-cy=btnSubmit]").click();
        cy.wait(2000);
        cy.visit("http://localhost:3000/products/Dsy7Cjxddd");
        cy.get("#btnUpdate").click();
        cy.get(".swal2-cancel").click();
    });

    it("should show product show delete popup dialog :: /", () => {
        cy.visit("http://localhost:3000/login");
        cy.get("#user").type("cypres@gmail.com");
        cy.get("#password").type("test");
        cy.get("[data-cy=btnSubmit]").click();
        cy.wait(2000);
        cy.visit("http://localhost:3000/products/Dsy7Cjxddd");
        cy.get("#btnDelete").click();
        cy.get(".swal2-confirm").click();
    })

});