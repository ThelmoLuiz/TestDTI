import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

context('o usuário está na página de login', () => {
  Cypress.Commands.add('login', () => {
    cy.session('loginSession', () => {
      cy.visit('http://www.automationpractice.pl/index.php?controller=my-account');
      cy.get('#email').type('juca@teste.com'); // Informando endereço de e-mail
      cy.get('#passwd').type('123456'); // Informando senha
      cy.get('#SubmitLogin').click(); // Clicando no botão entrar
    //   cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible'); // Validando que estou logado
    });
  })
})