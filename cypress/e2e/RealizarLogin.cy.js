/// <reference types="cypress" />
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
context('Realizar Login', () => {
  before(() => {
      cy.session('login', () => {
          cy.visit('http://www.automationpractice.pl/index.php?controller=order-slip');
          cy.get('#email').type('juca@teste.com');
          cy.get('#passwd').type('123456');
          cy.get('#SubmitLogin').click();
       });
  });
  beforeEach(() => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=order-slip'); // URL da aplicação que será testada
});

  Dado('que realizo o login', () => {
      cy.get('a[title="Women"]', { timeout: 10000 }).should('be.visible').click(); // valido que  opção mulher (women) esta visivel e clicavel
  });
  Quando('valida que o nome do usuario esta correto',() =>{
    cy.xpath("//span[contains(.,'Juca juca')]").should('contain', 'Juca juca');
  })
});
