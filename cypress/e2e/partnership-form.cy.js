import { setupInterceptions } from "../support/interceptors";

import MainPage from "../../pages/main.page.js";
import PartnershipsPage from "../../pages/partnerships.page.js";
import ThankYouPage from "../../pages/thankYou.page.js";

describe("Tesring partnership page", () => {
  //test case 9
  it("Fill out the partnership form with valid data", () => {
    setupInterceptions();

    cy.visit("/");

    // не розумію чого не відображається клік по дропдаунах при тесті, тому пішов іншим шляхом
    MainPage.clickOnPartnershipsLink();

    PartnershipsPage.scrollToPartnershipForm();
    PartnershipsPage.shouldPartnershipFormBeVisible();

    PartnershipsPage.typeFirstName("FirstName");
    PartnershipsPage.typeLastName("LastName");

    PartnershipsPage.typeCompantField("Company");
    PartnershipsPage.typeEmailField("mybusinessemail@gmail.com");

    PartnershipsPage.selectCountryField("+380");
    PartnershipsPage.typePhoneField("0977777777");
    PartnershipsPage.selectPartnerType("SaaS / ISV / Tech");
    PartnershipsPage.typeAddInfoField("Because this is my dream");
    PartnershipsPage.clickOnApplyBtn();
    ThankYouPage.shouldTitle(["be.visible", "have.text", "Thank you."]);
    ThankYouPage.compareUrl(
      "https://telnyx.com/thank-you?formId=2242&email=mybusinessemail%40gmail.com"
    );
  });
});
