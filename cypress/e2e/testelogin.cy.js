/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

context('Realizar Login', () => {
  // Realiza o login apenas uma vez antes de todos os testes
  before(() => {
    cy.session("loginSession", () => {
      cy.visit('http://www.automationpractice.pl/index.php?controller=my-account');
      cy.get('#email').type('juca@teste.com'); // Informando endereço de e-mail
      cy.get('#passwd').type('123456'); // Informando senha
      cy.get('#SubmitLogin').click(); // Clicando no botão entrar
      cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible'); // Validando que estou logado
    });
  });

  Given('que realizo o login e valido', () => {
    // O login já foi realizado no before(), então, não há necessidade de repetir aqui.
    // Apenas garanta que a página carregue com a sessão ativa
    cy.visit('http://www.automationpractice.pl/index.php?controller=my-account');
    cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible');
  });

  When('adiciono algum item no carrinho', () => {
    // Reutiliza a sessão de login e visita a página desejada
    cy.visit("http://www.automationpractice.pl/index.php"); // Acesse a página inicial ou qualquer página desejada
    cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible'); // Valida se o usuário está logado
    cy.xpath("//li//a[contains(@title,'Women')]").click(); // Exemplo de interação com a página
  });

  Then('o item deve ser adicionado ao carrinho', () => {
    // Verifique se o item foi adicionado ao carrinho (isso depende do seu fluxo)
    cy.get('.shopping_cart').should('contain', '1 item');
  });
});
