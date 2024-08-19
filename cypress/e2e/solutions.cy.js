import { setupInterceptions } from "../support/interceptors";

import MainPage from "../../pages/main.page.js";
import SolutionsPage from "../../pages/solutions.page.js";

describe("The Home Page", () => {
  // //test case 2
  it("Make a transition to the Solutions page", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.clickOnSolutionsLink();
    // cy.get('a[href="/solutions"]').click({ force: true });

    SolutionsPage.shouldSolutionsHeader([
      "have.text",
      "Solutions for scaling your business",
    ]);
    // cy.get('h1[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]').should(
    //   "have.text",
    //   "Solutions for scaling your business"
    // );
  });

  //test case 3
  it("Check the transition to the main page after clicking on the logo", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.clickOnSolutionsLink();
    // cy.get('a[href="/solutions"]').click({ force: true });

    SolutionsPage.shouldSolutionsHeader([
      "have.text",
      "Solutions for scaling your business",
    ]);
    // cy.get('h1[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]').should(
    //   "have.text",
    //   "Solutions for scaling your business"
    // );

    SolutionsPage.clickOnLogo();
    // cy.get(
    //   "#__next > div > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a"
    // ).click();

    MainPage.shouldHeadTitle(["have.text", "Connectivity reimagined."]);
    // cy.get("div>h1").should("have.text", "Connectivity reimagined.");
  });
});
