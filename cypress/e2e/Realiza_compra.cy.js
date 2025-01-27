/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

context('Realizar Login', () => {
  before(() => {
    // Cria ou recria a sessão inicial de login
    cy.session('login-session', () => {
      cy.login(); // Reutilizando a função de login criada em support/commands.js
         });
  });

  beforeEach(() => {
    // Restaura a sessão existente ou recria se necessário
    cy.session('login-session', () => {
      cy.login(); // Revalida o login se necessário
    });
    cy.visit('http://www.automationpractice.pl/index.php?controller=my-account'); // URL da aplicação que será testada
  });

  Dado('adiciono algum item no carrinho', () => {
    /*
     * Este bloco realiza a navegação até a seção de produtos e seleciona um item específico.
     * Caso o item selecionado esteja indisponível, é feita a escolha de uma alternativa válida (cor branca).
     */
    cy.xpath("//span[contains(.,'Juca juca')]").should('exist').and('be.visible'); // Valida que o usuário está logado
    cy.xpath("//li//a[contains(@title,'Women')]").click(); // Navega até a seção feminina
    cy.xpath("//span[contains(.,'All specials')]").click(); // Acessa a seção de ofertas
    cy.xpath("(//a[@class='product-name'][contains(.,'Blouse')])[1]").click(); // Seleciona um item específico
    cy.contains("This product is no longer in stock with those attributes but is available with others.")
      .then(($message) => {
        if ($message.length > 0) {
          cy.xpath("//a[contains(@name,'White')]").click(); // Seleciona a cor branca caso a preta esteja indisponível
          cy.xpath("//span[contains(.,'In stock')]").should('exist').and('be.visible'); // Valida disponibilidade
        }
      });
  });

  Quando('realiza a validacao dos valores do item que esta no carrinho', () => {
    /*
     * Este bloco adiciona o produto ao carrinho e valida se os valores esperados (produtos, taxas, total)
     * estão sendo exibidos corretamente. Em seguida, avança para os passos do checkout.
     */
    cy.visit('http://www.automationpractice.pl/index.php?id_product=2&controller=product#/1-size-s/8-color-white'); // Acessa a página do produto
    cy.xpath("//span[contains(.,'Add to cart')]").click(); // Adiciona o produto ao carrinho
    const valores = [27, 7, 34]; // Valores esperados no carrinho
    valores.forEach((dados) => {
      const xpath = `//div[@class="layer_cart_row"][contains(.,"$${dados}")]`; // Localiza os valores no carrinho
      cy.xpath(xpath).should('exist').and('be.visible'); // Valida que os valores estão visíveis
    });
    cy.xpath("//span[contains(.,'Proceed to checkout')]").click(); // Avança para o próximo passo do checkout
    cy.xpath("(//span[contains(.,'Proceed to checkout')])[2]").click(); // Avança novamente
  });

  Entao('finalizo a compra', () => {
    /*
     * Este bloco finaliza o processo de checkout. Ele inclui:
     * - Aceitação dos termos de serviço.
     * - Escolha do método de pagamento (transferência bancária).
     * - Confirmação da compra e validação de sucesso.
     */
    cy.visit('http://www.automationpractice.pl/index.php?controller=order&step=1'); // Acessa o resumo do pedido
    cy.xpath("//button[@type='submit'][contains(.,'Proceed to checkout')]").click(); // Confirma o terceiro passo
    cy.xpath("//input[contains(@type,'checkbox')]").click(); // Aceita os termos de serviço
    cy.xpath("//button[@type='submit'][contains(.,'Proceed to checkout')]").click(); // Avança para o último passo
    cy.xpath("//a[contains(@title,'Pay by bank wire')]").click(); // Seleciona o pagamento por transferência bancária
    cy.xpath("//span[contains(.,'I confirm my order')]").click(); // Confirma o pedido
    cy.xpath("//p[@class='alert alert-success'][contains(.,'Your order on My Shop is complete.')]").should('be.visible'); // Valida que a compra foi concluída com sucesso
  });
});
