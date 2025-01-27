const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
module.exports = defineConfig({
  e2e: {
    baseUrl:"http://www.automationpractice.pl/index.php?controller=my-account",
    specPattern:
      "C:Users\thelmo.junior_sankhyDesktopCypresscypresse2e\finances.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalSessionAndOrigin: true,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});