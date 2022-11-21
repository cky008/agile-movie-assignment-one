// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('onSubmit', (review) => {
    cy.get("#author").type(review.author, {force:true});
    cy.get("#review").type(review.review, {force:true});
    cy.get("#select-rating").click({force:true});
    cy.get(".MuiList-root>.MuiButtonBase-root").eq(review.rating+2).click({force:true});
    cy.get("button[type='submit']").click({force:true});
  });