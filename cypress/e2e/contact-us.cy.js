import { setupInterceptions } from "../support/interceptors";

import MainPage from "../../pages/main.page.js";
import ContactUsPage from "../../pages/contactUs.page.js";

describe("The Home Page", () => {
  //teest case 5
  it("Form display on the Contact Us page", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.clickOnContactUsLink();

    ContactUsPage.shouldFormBeVisible();
  });
});
