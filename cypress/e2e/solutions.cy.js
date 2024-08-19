import { setupInterceptions } from "../support/interceptors";

import MainPage from "../../pages/main.page.js";
import SolutionsPage from "../../pages/solutions.page.js";

describe("Testing solutions page", () => {
  // //test case 2
  it("Make a transition to the Solutions page", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.clickOnSolutionsLink();

    SolutionsPage.shouldSolutionsHeader([
      "have.text",
      "Solutions for scaling your business",
    ]);
  });

  //test case 3
  it("Check the transition to the main page after clicking on the logo", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.clickOnSolutionsLink();

    SolutionsPage.shouldSolutionsHeader([
      "have.text",
      "Solutions for scaling your business",
    ]);

    SolutionsPage.clickOnLogo();

    MainPage.shouldHeadTitle(["have.text", "Connectivity reimagined."]);
  });
});
