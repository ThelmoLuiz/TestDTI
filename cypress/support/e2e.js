// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "@badeball/cypress-cucumber-preprocessor";
// Definir as funções para simular BDD
globalThis.Dado = (descricao, acao) => it(`Dado ${descricao}`, acao);
globalThis.Quando = (descricao, acao) => it(`Quando ${descricao}`, acao);
globalThis.E = (descricao, acao) => it(`E ${descricao}`, acao);
globalThis.Entao = (descricao, acao) => it(`Então ${descricao}`, acao);
