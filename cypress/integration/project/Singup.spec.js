/// <reference types="cypress" />

describe("SINGUP :: Initial render", () => {

    it("should show login page :: /singup", () => {
        cy.visit("http://localhost:3000/singup");
        cy.contains("H2","Regístrate");
        cy.get("[data-cy=btnSubmit]").should("exist");
        cy.get("[data-cy=btnBack]").should("exist");
    });

    it("should show error popup :: email /singup", () => {
        cy.get("[data-cy=btnSubmit]").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe un correo válido");
        cy.get(".swal2-confirm").click();

    });

    it("should show error popup :: name /singup", () => {
        cy.get("#user").type("cypres@gmail.com");
        cy.get("[data-cy=btnSubmit]").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe tu nombre");
        cy.get(".swal2-confirm").click();

    });

    it("should show error popup :: phone /singup", () => {
        cy.get("#user").type("cypres@gmail.com");
        cy.get("#name").type("Cypress");
        cy.get("[data-cy=btnSubmit]").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe tu celular en 10 caracteres");
        cy.get(".swal2-confirm").click();

    });

    it("should show error popup :: password /singup", () => {
        cy.get("#user").type("cypres@gmail.com");
        cy.get("#name").type("Cypress");
        cy.get("#phone").type("4421110000");
        cy.get("[data-cy=btnSubmit]").click();
        cy.get("#swal2-html-container")
            .should("exist")
            .contains("Escribe una contraseña mayor a 5 caracteres");
        cy.get(".swal2-confirm").click();
    });

});