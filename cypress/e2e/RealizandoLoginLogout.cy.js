/// <reference types="cypress" />
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
describe('Suite de testes com sessão de login reutilizada', () => {
    beforeEach(() => {
      // Define a sessão e reutiliza em todos o testes
      cy.session('login-session', () => {
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.xpath("//a[@class='login'][contains(.,'Sign in')]").as('btn_login').click();
        cy.get('#email').type('juca@teste.com');
        cy.get('#passwd').type('123456');
        cy.get('#SubmitLogin').click();
        cy.url().should('include', '/index.php');
      });
    });
    //Neste trecho de codigo 
    Dado('verifica se o usuario esta logado', () => {
  /*
   * Este bloco acessa a página inicial do site e valida se o usuário "Juca Juca" está logado.
   * A validação é feita verificando a presença e visibilidade do elemento que exibe o nome do usuário.
   */
      cy.visit('http://www.automationpractice.pl/index.php');
      cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible');
    });
  
    Quando('clica na opção mulheres ', () => {
  /*
   * Este bloco simula o clique na categoria "Women" no menu do site.
   * Após o clique, valida que a página correspondente foi carregada com sucesso
   * verificando a existência e visibilidade de um elemento que descreve a categoria.
   */
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.xpath("//li//a[contains(@title,'Women')]").click().and('be.visible');
        cy.xpath("//div[@class='cat_desc'][contains(.,'shoes')]").should('exist').and('be.visible');
    });
    Entao('realiza logout e valido que estou na pagina inicial', () => {
  /*
   * Este bloco realiza o logout do usuário e valida que ele foi redirecionado para a página inicial.
   * Após o logout, verifica-se que o botão "Sign in" está presente e visível,
   * indicando que o usuário saiu da conta com sucesso.
   */
        cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
        cy.xpath("//a[@class='logout'][contains(.,'Sign out')]").click();
        cy.xpath("//a[@class='login'][contains(.,'Sign in')]").should('exist').and('be.visible');
    })
  });
  