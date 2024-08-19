const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mdhv8x',
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://telnyx.com",
  },
});
