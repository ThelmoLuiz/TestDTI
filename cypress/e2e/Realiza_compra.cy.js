/// <reference types="cypress" />
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
context('Realizar Login', () => {
     before(() => {
        cy.login(); // Reutilizando a função de login que foi criada na pasta suport/commands.js
      });
     beforeEach(() => {
           cy.visit('http://www.automationpractice.pl/index.php?controller=my-account'); // URL da aplicação que será testada
      });
    Dado('adiciono algum item no carrinho', () => {
        cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible'); // validando que estou logado com usuário correto
        cy.xpath("//li//a[contains(@title,'Women')]").click(); // clicando a opção women(Mulher para adicinar itens ao carrinho)
        cy.xpath("//span[contains(.,'All specials')]").click();
        cy.xpath("(//a[@class='product-name'][contains(.,'Blouse')])[1]").click();
        cy.contains("This product is no longer in stock with those attributes but is available with others.").then(($message) =>{
            if ($message.length > 0) {
                cy.xpath("//a[contains(@name,'White')]").click();
                cy.xpath("//span[contains(.,'In stock')]").should('exist').and('be.visible');
                
            }
        cy.xpath("//span[contains(.,'Add to cart')]").click();
        const valores = [27, 7, 34];
        valores.forEach((dados) =>{
            const xpath = `//div[@class="layer_cart_row"][contains(.,"$${dados}")]`;
            cy.xpath(xpath).should('exist').and('be.visible')
        })
        cy.xpath("//span[contains(.,'Proceed to checkout')]").click();
        cy.xpath("(//span[contains(.,'Proceed to checkout')])[2]").click();
        
    })
    cy.xpath("//button[@type='submit'][contains(.,'Proceed to checkout')]").click();
    cy.xpath("//input[contains(@type,'checkbox')]").click();
    cy.xpath("//button[@type='submit'][contains(.,'Proceed to checkout')]").click();
    cy.xpath("//a[contains(@title,'Pay by bank wire')]").click();
    cy.xpath("//span[contains(.,'I confirm my order')]").click();
    cy.xpath("//p[@class='alert alert-success'][contains(.,'Your order on My Shop is complete.')]").should('be.visible');
    
    })
    Quando('realiza o preenchimento do endereco de entrega',() =>{
        cy.login();
        cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible'); // validando que estou logado com usuário correto
    })

})