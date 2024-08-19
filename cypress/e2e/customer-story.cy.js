import { setupInterceptions } from "../support/interceptors";

import MainPage from "../../pages/main.page.js";
import CustomerStoriesPage from "../../pages/customerStories.page.js";

describe("Testing customer story page", () => {
  //test case 10
  it('Read the "BEST Canada Energy" customer story', () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.clickOnCustomerStoriesLink();
    CustomerStoriesPage.scrollToReadCanadaLink();
    CustomerStoriesPage.clickOnReadCanadaLink();

    CustomerStoriesPage.compareUrl(
      "https://telnyx.com/customer-stories/best-canada-energy"
    );

    CustomerStoriesPage.shouldSelectedStoryTitle([
      "be.visible",
      "have.text",
      "BEST Canada Energy",
    ]);
  });
});
