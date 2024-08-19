import { setupInterceptions } from "../support/interceptors";

import SignUpPage from "../../pages/signUp.page.js";
import MainPage from "../../pages/main.page.js";
import SolutionsPage from "../../pages/solutions.page.js";
import CareersPage from "../../pages/careers.page.js";
import ContactUsPage from "../../pages/contactUs.page.js";
import ShopTelnyxPage from "../../pages/shopTelnyx.page.js";
import PartnershipsPage from "../../pages/partnerships.page.js";
import ThankYouPage from "../../pages/thankYou.page.js";
import CustomerStoriesPage from "../../pages/customerStories.page.js";

describe("The Home Page", () => {
  //test case 1
  it("Sign up to Telnyx with not valid email", () => {
    setupInterceptions();

    cy.visit("/");
    cy.get("#header-sign-up").click({ force: true });

    SignUpPage.clickOnEmailField();
    SignUpPage.typeInEmailField("asd@asd");

    SignUpPage.clickOnFirstName();
    SignUpPage.typeInFirstName("Tester");

    SignUpPage.clickOnLastName();
    SignUpPage.typeInLastName("Aqa");

    SignUpPage.clickOnPassword();
    SignUpPage.typeInPassword("Qwe123qwe123*");

    SignUpPage.clickOnTermsCheckbox();

    SignUpPage.clickOnSignUpBtn();

    SignUpPage.errorMessage;
  });

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

  //teest case 5
  it("Form display on the Contact Us page", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.clickOnContactUsLink();

    ContactUsPage.shouldFormBeVisible();
  });

  //test case 7
  it("Add the product to the cart on the store page", () => {
    setupInterceptions();

    cy.visit("/");
    MainPage.removeAttrInShopLink("target");
    MainPage.clickOnShopLink();

    ShopTelnyxPage.scrollToShopifySection();

    ShopTelnyxPage.clickOnAddItemBtn();

    ShopTelnyxPage.shouldCartDriwerBeVisible();
    ShopTelnyxPage.shouldAddedItemLink([
      "be.visible",
      "have.text",
      "Telnyx Classic Hat",
    ]);
  });

  //test case 8
  it("Delete the product from the cart on the store page", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.removeAttrInShopLink("target");
    MainPage.clickOnShopLink();

    ShopTelnyxPage.scrollToShopifySection();

    ShopTelnyxPage.clickOnAddItemBtn();

    ShopTelnyxPage.shouldCartDriwerBeVisible();

    ShopTelnyxPage.shouldAddedItemLink([
      "be.visible",
      "have.text",
      "Telnyx Classic Hat",
    ]);

    ShopTelnyxPage.clickOnRemoveAddedItemBtn();

    ShopTelnyxPage.shouldEmptyCartWrapBeVisible();

    ShopTelnyxPage.shouldEmptyCartTitle([
      "be.visible",
      "have.text",
      "Your cart is empty",
    ]);
  });

  //test case 9
  it("Fill out the partnership form with valid data", () => {
    setupInterceptions();

    cy.visit("/");

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
