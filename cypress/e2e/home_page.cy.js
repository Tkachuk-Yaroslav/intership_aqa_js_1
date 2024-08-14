// describe("The Home Page", () => {
//   it("successfully loads", () => {
//     cy.visit("https://telnyx.com/", { timeout: 60000 }); // change URL to match your dev URL
//   });
// });

describe("The Home Page", () => {
  it("successfully loads", () => {
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
  });
});
