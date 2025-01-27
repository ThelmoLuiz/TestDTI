/// <reference types="cypress" />

context('Realizar login', () => {
    it('acessar area do cliente ', () => {
      // Acessar o site
      cy.visit('http://www.automationpractice.pl/index.php?controller=my-account');
  
      // Informar usuário senha
      cy.get('#email').type('teste1@teste.com'); // informando o e-mail cadastrado
      cy.get('#passwd').type('123456'); // informado a senha
      cy.get('#SubmitLogin').dblclick();
      cy.contains('Authentication failed.').should('be.visible');

  
      // Preencher o formulário de cadastro
      //cy.get('#id_gender1').click(); // Selecionar gênero
      //cy.get('#customer_firstname').type('João'); // Inserir primeiro nome
      //cy.get('#passwd').type('1234567'); // Inserir senha
      //cy.get('#submitAccount').click(); // Botão "Registrar"
    });
  });
  