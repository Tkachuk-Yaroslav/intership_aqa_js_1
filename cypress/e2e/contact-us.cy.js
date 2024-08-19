import { setupInterceptions } from "../support/interceptors";

import MainPage from "../../pages/main.page.js";
import CareersPage from "../../pages/careers.page.js";

describe("Testing contact us page", () => {
  //test case 4
  it("Go to the Controller (Remote) job on the careers page", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.scrollToCareersLink();
    MainPage.clickOnCareersLink();

    CareersPage.removeAttr("target");
    CareersPage.scrollToJobLink();
    CareersPage.clickOnJobLink();

    cy.origin("https://boards.greenhouse.io", () => {
      cy.get('h1[class="app-title"]').should(
        "have.text",
        "Controller (Remote)"
      );
    });
  });
});
