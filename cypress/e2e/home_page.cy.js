// describe("The Home Page", () => {
//   it("successfully loads", () => {
//     cy.visit("https://telnyx.com/", { timeout: 60000 }); // change URL to match your dev URL
//   });
// });

describe("The Home Page", () => {
  // it("Sign up to Telnyx with not valid email", () => {
  //   cy.on("uncaught:exception", (err, runnable) => {
  //     // поверни false, щоб Cypress не зупиняв тест при виникненні цієї помилки
  //     if (
  //       err.message.includes(
  //         "The fetching process for the media resource was aborted"
  //       )
  //     ) {
  //       return false;
  //     }
  //   });

  //   cy.visit("/");

  //   cy.get("#header-sign-up").click({ force: true });

  //   // cy.get("#email").click().type("asd@asd");
  //   cy.get("#email").as("emailField").click({ force: true });
  //   cy.get("@emailField").type("asd@asd");
  //   cy.get("#first_name").click().type("Tester");
  //   cy.get("#last_name").click().type("Aqa");
  //   cy.get("#password").click().type("Qwe123qwe123*");

  //   cy.get("#terms_and_conditions").click();
  //   cy.get(
  //     'button[class="c-kDQqQr c-kDQqQr-fwzCzT-background-light c-kDQqQr-cOvXws-cv c-ddSKil"]'
  //   ).click();

  //   cy.get(
  //     "#__next > div > main > section > div.c-cUhiIV.c-cFpcyF > div > div.c-kbJYtg > div > form > div.c-UUKrH.c-UUKrH-kDyeyw-type-error"
  //   );
  // });

  it("Make a transition to the Solutions page", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      // поверни false, щоб Cypress не зупиняв тест при виникненні цієї помилки
      if (
        err.message.includes(
          "The fetching process for the media resource was aborted"
        )
      ) {
        return false;
      }
    });

    cy.visit("/");

    cy.get('a[href="/solutions"]').click({ force: true });

    cy.get('h1[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]').should(
      "have.text",
      "Solutions for scaling your business"
    );
  });
});
