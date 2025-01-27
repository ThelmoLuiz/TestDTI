/// <reference types="cypress" />

context('Cadastrar', () => {
    it('Cadastrar entradas', () => {
      // Acessar o site
      cy.visit('http://www.automationpractice.pl/index.php?controller=my-account');
  
      // Inserir email para criar uma conta
      cy.get('#email_create').type('teste1@teste.com'); // Usando seletor de ID diretamente
      cy.get('#SubmitCreate').click(); // Botão "Registrar"
  
      // Preencher o formulário de cadastro
      //cy.get('#id_gender1').click(); // Selecionar gênero
      //cy.get('#customer_firstname').type('João'); // Inserir primeiro nome
      //cy.get('#passwd').type('1234567'); // Inserir senha
      //cy.get('#submitAccount').click(); // Botão "Registrar"
    });
  });
  