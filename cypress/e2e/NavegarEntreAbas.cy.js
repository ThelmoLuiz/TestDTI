/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

context('Navegar entre abas', () => {
    Dado('navega na aba womer', () =>{
        cy.visit('http://www.automationpractice.pl/index.php?controller=my-account')
        cy.xpath("//li//a[contains(@title,'Women')]").click().should('exist');
        cy.xpath("//div[@class='cat_desc'][contains(.,'shoes')]").should('exist').and('be.visible');
    });

    Quando('navega na aba Dresses', () =>{
        cy.visit('http://www.automationpractice.pl/index.php?controller=my-account')
        cy.xpath("(//a[contains(@title,'Dresses')])[5]").click().should('exist');
        cy.xpath("//p[contains(.,'We offer dresses for every day, every style and every occasion.')]").should('exist').and('be.visible');
    });

    Entao('navega na aba T-Shirts', () =>{
        cy.visit('http://www.automationpractice.pl/index.php?controller=my-account')
        cy.xpath("(//a[contains(@title,'T-shirts')])[2]").click().should('exist');
        cy.xpath("//span[@class='category-name'][contains(.,'T-shirts')]").should('exist').and('be.visible');
    }); 
});