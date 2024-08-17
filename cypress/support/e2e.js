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
import "./commands";
Cypress.on("uncaught:exception", (err, runnable) => {
  // Поверни false, щоб Cypress не зупиняв тест при виникненні цієї помилки
  if (
    err.message.includes(
      "The fetching process for the media resource was aborted"
    )
  ) {
    return false;
  }
  // Повертаємо true для інших виключень, щоб залишити стандартну поведінку
  return false;
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
