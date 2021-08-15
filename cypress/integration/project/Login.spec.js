/// <reference types="cypress" />

describe("LOGIN :: Initial render", () => {

    it("should show login page :: /login", () => {
        cy.visit("http://localhost:3000/login");
        cy.contains("STRONG","Hey! 🤩");
        cy.get("[data-cy=btnSubmit]").should("exist");
        cy.get("[data-cy=btnBack]").should("exist");
        cy.get("[data-cy=singupHref]").should(
            'have.attr',
            'href',
            '/singup'
        );

    });

    it("should show error popup :: email /login", () => {
        cy.get("[data-cy=btnSubmit]").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe un correo");
        cy.get(".swal2-confirm").click();

    });

    it("should show error popup :: password /login", () => {
        cy.get("#user").type("cypres@gmail.com");
        cy.get("[data-cy=btnSubmit]").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe una contraseña");
        cy.get(".swal2-confirm").click();
    });

});