// cypress/support/interceptors.js
export function setupInterceptions() {
  cy.intercept("POST", "**/collect", { statusCode: 204, body: {} });
  cy.intercept("GET", "**/geolocation.onetrust.com/**", {
    statusCode: 204,
    body: {},
  });
  cy.intercept("POST", "**/notify.bugsnag.com/**", {
    statusCode: 204,
    body: {},
  });
  cy.intercept("POST", "**/sessions.bugsnag.com/**", {
    statusCode: 204,
    body: {},
  });
  cy.intercept("GET", "**/ipv6.6sc.co/**", { statusCode: 204, body: {} });
  cy.intercept("POST", "**/ingest/v1/web/start", { statusCode: 204, body: {} });
  cy.intercept("POST", "**/registrations", { statusCode: 204, body: {} });
  cy.intercept("POST", "**/verify-captcha", { statusCode: 204, body: {} });
  cy.intercept("POST", "**/api2/reload", { statusCode: 204, body: {} });
  cy.intercept("POST", "**/api2/clr", { statusCode: 204, body: {} });
  cy.intercept("POST", "**/api2/bcn", { statusCode: 204, body: {} });
  cy.intercept(
    {
      method: "GET",
      url: "/_next/data/*/en-US/use-cases/healthcare-iot.json*",
    },
    (req) => {
      req.reply({ statusCode: 304 });
    }
  );

  cy.intercept(
    {
      method: "GET",
      url: "/_next/data/*/en-US/use-cases/sms-marketing.json*",
    },
    (req) => {
      req.reply({ statusCode: 304 });
    }
  );

  cy.intercept(
    {
      method: "GET",
      url: "/_next/data/*/en-US/use-cases/data-archiving.json*",
    },
    (req) => {
      req.reply({ statusCode: 304 });
    }
  );

  cy.intercept(
    {
      method: "GET",
      url: "/_next/data/*/en-US/use-cases/smart-agriculture.json*",
    },
    (req) => {
      req.reply({ statusCode: 304 });
    }
  );

  cy.intercept(
    {
      method: "GET",
      url: "/_next/data/*/en-US/use-cases/backup-and-restore.json*",
    },
    (req) => {
      req.reply({ statusCode: 304 });
    }
  );

  cy.intercept(
    {
      method: "GET",
      url: "/_next/data/*/en-US/use-cases/ai-and-machine-learning.json*",
    },
    (req) => {
      req.reply({ statusCode: 304 });
    }
  );

  // cy.intercept(
  //   {
  //     method: "GET",
  //     url: "https://telnyx.com/careers",
  //   },
  //   (req) => {
  //     req.reply({ statusCode: 304 });
  //   }
  // );

  cy.intercept(
    {
      method: "GET",
      url: "/_next/data/*/en-US/use-cases/fleet-management.json*",
    },
    (req) => {
      req.reply({ statusCode: 304 });
    }
  );
}
