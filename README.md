Neste projeto foi realizado as configurações necessarias para execução de 3 teste:
1º NavegarEntreAbas
2º RealizarCompras
3º RealizandoLoginLogout

Imports:
    import './commands'
    import "@badeball/cypress-cucumber-preprocessor";
Esta no arquivo: TestDTI\cypress\support\e2e.js

Ajuste realizado no arquivo:commands.js
    Foi configurado um login global para se utilizado no teste RealizarCompras

Para execução dos teste para realizar o o clone do projeto
e executar os seguinte comando: "npx cypress open" no seu editor de codigo
Vai ser aberto o gerenciador do cypress > clicar na opção E2E Testing > Escolher o navegador > Start E2E testing in > e escolher o teste para que seja executado