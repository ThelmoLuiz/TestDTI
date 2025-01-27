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
require('cypress-xpath');

// criando login global com o e-mail: juca@teste.com
Cypress.Commands.add('login', () => {
    cy.session('loginSession', () => {
      cy.visit('http://www.automationpractice.pl/index.php?controller=my-account');
      cy.get('#email').type('juca@teste.com'); // Informando endereço de e-mail
      cy.get('#passwd').type('123456'); // Informando senha
      cy.get('#SubmitLogin').click(); // Clicando no botão entrar
    //   cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible'); // Validando que estou logado
    });
  });

  