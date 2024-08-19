// describe("The Home Page", () => {
//   it("successfully loads", () => {
//     cy.visit("https://telnyx.com/", { timeout: 60000 }); // change URL to match your dev URL
//   });
// });

import { setupInterceptions } from "../support/interceptors";

import SignUpPage from "../../pages/signUp.page.js";
import MainPage from "../../pages/main.page.js";
import SolutionsPage from "../../pages/solutions.page.js";
import CareersPage from "../../pages/careers.page.js";
import ContactUsPage from "../../pages/contactUs.page.js";
import ShopTelnyxPage from "../../pages/shopTelnyx.page.js";

describe("The Home Page", () => {
  // //test case 1
  // it("Sign up to Telnyx with not valid email", () => {
  //   setupInterceptions();

  //   cy.visit("/");
  //   cy.get("#header-sign-up").click({ force: true });

  //   SignUpPage.clickOnEmailField();
  //   SignUpPage.typeInEmailField("asd@asd");

  //   SignUpPage.clickOnFirstName();
  //   SignUpPage.typeInFirstName();

  //   SignUpPage.clickOnLastName();
  //   SignUpPage.typeInLastName();

  //   SignUpPage.clickOnPassword();
  //   SignUpPage.typeInPassword();

  //   SignUpPage.clickOnTermsCheckbox();

  //   SignUpPage.clickOnSignUpBtn();

  //   SignUpPage.errorMessage;

  //   // // cy.get("#email").click().type("asd@asd");
  //   // // cy.get("#email").as("emailField").click({ force: true });
  //   // // cy.get("@emailField").type("asd@asd");
  //   // // cy.get("#first_name").click().type("Tester");
  //   // // cy.get("#last_name").click().type("Aqa");
  //   // // cy.get("#password").click().type("Qwe123qwe123*");

  //   // // cy.get("#terms_and_conditions").click();
  //   // // cy.get(
  //   // //   'button[class="c-kDQqQr c-kDQqQr-fwzCzT-background-light c-kDQqQr-cOvXws-cv c-ddSKil"]'
  //   // // ).click();

  //   // cy.get(
  //   //   "#__next > div > main > section > div.c-cUhiIV.c-cFpcyF > div > div.c-kbJYtg > div > form > div.c-UUKrH.c-UUKrH-kDyeyw-type-error"
  //   // );
  // });

  // // //test case 2
  // it("Make a transition to the Solutions page", () => {
  //   setupInterceptions();

  //   cy.visit("/");

  //   MainPage.clickOnSolutionsLink();
  //   // cy.get('a[href="/solutions"]').click({ force: true });

  //   SolutionsPage.shouldSolutionsHeader();
  //   // cy.get('h1[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]').should(
  //   //   "have.text",
  //   //   "Solutions for scaling your business"
  //   // );
  // });

  // //test case 3
  // it("Check the transition to the main page after clicking on the logo", () => {
  //   setupInterceptions();

  //   cy.visit("/");

  //   MainPage.clickOnSolutionsLink();
  //   // cy.get('a[href="/solutions"]').click({ force: true });

  //   SolutionsPage.shouldSolutionsHeader();
  //   // cy.get('h1[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]').should(
  //   //   "have.text",
  //   //   "Solutions for scaling your business"
  //   // );

  //   SolutionsPage.clickOnLogo();
  //   // cy.get(
  //   //   "#__next > div > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a"
  //   // ).click();

  //   MainPage.shouldHeadTitle();
  //   // cy.get("div>h1").should("have.text", "Connectivity reimagined.");
  // });

  // //test case 4
  // it("Go to the Controller (Remote) job on the careers page", () => {
  //   setupInterceptions();

  //   cy.visit("/");

  //   MainPage.scrollToCareersLink();
  //   MainPage.clickOnCareersLink();

  //   CareersPage.removeAttr("target");
  //   CareersPage.scrollToJobLink();
  //   CareersPage.clickOnJobLink();

  //   // // cy.get('a[href="/careers"]').scrollIntoView().click({ force: true });
  //   // // cy.get('a[href="https://boards.greenhouse.io/telnyx54/jobs/5968196003"]')
  //   // //   .invoke("removeAttr", "target")
  //   // //   .scrollIntoView()
  //   // //   .click({ force: true });

  //   // Використання cy.origin для взаємодії з іншим доменом
  //   cy.origin("https://boards.greenhouse.io", () => {
  //     cy.get('h1[class="app-title"]').should(
  //       "have.text",
  //       "Controller (Remote)"
  //     );
  //   });
  // });

  // //teest case 5
  // it("Form display on the Contact Us page", () => {
  //   setupInterceptions();

  //   cy.visit("/");

  //   MainPage.clickOnContactUsLink();
  //   // cy.get('div[class="c-glDvHT"]>a[href="/contact-us"]').click({
  //   //   force: true,
  //   // });

  //   ContactUsPage.shouldFormBeVisible();
  //   // cy.get("#mktoForm_1987").should("be.visible");
  // });

  // //test case 6
  // it("Sign up to Telnyx with valid credentials", () => {
  //   setupInterceptions();

  //   cy.visit("/");

  //   MainPage.clickOnSignUpBtn();
  //   // cy.get("#header-sign-up").click({ force: true });

  //   SignUpPage.clickOnEmailField();
  //   SignUpPage.typeInEmailField("emailisnotaprobl@gmail.com");

  //   SignUpPage.clickOnFirstName();
  //   SignUpPage.typeInFirstName();

  //   SignUpPage.clickOnLastName();
  //   SignUpPage.typeInLastName();

  //   SignUpPage.clickOnPassword();
  //   SignUpPage.typeInPassword();

  //   SignUpPage.clickOnTermsCheckbox();
  //   SignUpPage.clickOnSignUpBtn();
  //   // cy.get("#email").as("emailField").click({ force: true });
  //   // cy.get("@emailField").type("emailisnotaprobl@gmail.com");
  //   // cy.get("#first_name").click().type("Tester");
  //   // cy.get("#last_name").click().type("Aqa");
  //   // cy.get("#password").click().type("Qwe123*qwe123");

  //   // cy.get("#terms_and_conditions").click();
  //   // cy.get(
  //   //   'button[class="c-kDQqQr c-kDQqQr-fwzCzT-background-light c-kDQqQr-cOvXws-cv c-ddSKil"]'
  //   // ).click();

  //   //вибиває помилку замість переадресації
  //   cy.get("h1>span", { timeout: 10000 }).should("have.text", "One last step");
  // });

  // //test case 7
  // it("Add the product to the cart on the store page", () => {
  //   setupInterceptions();

  //   cy.visit("/");
  // MainPage.removeAttrInShopLink("target");
  // MainPage.clickOnShopLink();
  //   // // cy.get('a[href="https://shop.telnyx.com"]')
  //   // //   .invoke("removeAttr", "target")
  //   // //   .click({ force: true });

  //   ShopTelnyxPage.scrollToShopifySection();
  //   // // Без використання cy.origin()
  //   // // cy.get(
  //   // //   "#shopify-section-template--14828910772302__featured-collection-0 > div > div > div > h2"
  //   // // ).scrollIntoView();

  //   ShopTelnyxPage.clickOnAddItemBtn();
  //   // // cy.get(
  //   // //   "#quick-add-template--14828910772302__featured-collection-06960027533390-submit"
  //   // // ).click();

  //   ShopTelnyxPage.shouldCartDriwerBeVisible();
  //   // cy.get("cart-drawer.drawer.animate.active").should("be.visible");
  // ShopTelnyxPage.shouldAddedItemLink([
  //   "be.visible",
  //   "have.text",
  //   "Telnyx Classic Hat",
  // ]);
  //   // // cy.get(
  //   // //   'td[class="cart-item__details"]>a[href="/products/telnyx-classic-hat?variant=40466321965134"]'
  //   // // )
  //   // //   .should("be.visible")
  //   // //   .and("have.text", "Telnyx Classic Hat");
  // });

  //test case 8
  it("Delete the product from the cart on the store page", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.removeAttrInShopLink("target");
    MainPage.clickOnShopLink();
    // // cy.get('a[href="https://shop.telnyx.com"]')
    // //   .invoke("removeAttr", "target")
    // //   .click({ force: true });

    ShopTelnyxPage.scrollToShopifySection();
    // // // Без використання cy.origin()
    // // cy.get(
    // //   "#shopify-section-template--14828910772302__featured-collection-0 > div > div > div > h2"
    // // ).scrollIntoView();

    ShopTelnyxPage.clickOnAddItemBtn();
    // // cy.get(
    // //   "#quick-add-template--14828910772302__featured-collection-06960027533390-submit"
    // // ).click();

    ShopTelnyxPage.shouldCartDriwerBeVisible();
    // // cy.get("cart-drawer.drawer.animate.active").should("be.visible");

    ShopTelnyxPage.shouldAddedItemLink([
      "be.visible",
      "have.text",
      "Telnyx Classic Hat",
    ]);
    // // cy.get(
    // //   'td[class="cart-item__details"]>a[href="/products/telnyx-classic-hat?variant=40466321965134"]'
    // // )
    // //   .should("be.visible")
    // //   .and("have.text", "Telnyx Classic Hat");

    ShopTelnyxPage.clickOnRemoveAddedItemBtn();
    // // cy.get("#CartDrawer-Remove-1>button").click();

    ShopTelnyxPage.shouldEmptyCartWrapBeVisible();
    // // cy.get('div[class="drawer__inner-empty"]').should("be.visible");

    ShopTelnyxPage.shouldEmptyCartTitle([
      "be.visible",
      "have.text",
      "Your cart is empty",
    ]);
    // // cy.get('h2[class="cart__empty-text"]')
    // //   .should("be.visible")
    // //   .and("have.text", "Your cart is empty");
  });

  // //test case 9
  // it("Fill out the partnership form with valid data", () => {
  //   setupInterceptions();

  //   cy.visit("/");

  //   cy.get("#radix-\\:r5\\:").should("be.visible").click();
  //   // не розумію чого не відображається клік по дропдаунах при тесті, тому пішов іншим шляхом
  //   cy.get('div[aria-hidden="true"]>a[href="/partnerships"]').click({
  //     force: true,
  //   });

  //   cy.get("#mktoForm_2242").scrollIntoView().should("be.visible");
  //   cy.get("#FirstName").should("be.visible").type("FirstName");
  //   cy.get("#LastName").should("be.visible").type("LastName");
  //   cy.get("#Company").should("be.visible").type("Company");
  //   cy.get("#Email").should("be.visible").type("mybusinessemail@gmail.com");
  //   // cy.get("#Phone_Number_Extension__c").should("be.visible").click();

  //   cy.get("#Phone_Number_Extension__c").should("be.visible").select("+380"); // За значенням
  //   cy.get("#Phone_Number_Base__c").should("be.visible").type("0977777777");
  //   cy.get("#Form_Partner_Type__c")
  //     .should("be.visible")
  //     .select("SaaS / ISV / Tech"); // За значенням
  //   cy.get("#Form_Additional_Information__c")
  //     .should("be.visible")
  //     .type("Because this is my dream");

  //   cy.get('button[class="mktoButton"]').should("be.visible").click();
  //   cy.get("h1>span").should("be.visible").and("have.text", "Thank you.");
  //   // Перевіряємо, що URL змінився на очікуваний
  //   cy.url().should(
  //     "eq",
  //     "https://telnyx.com/thank-you?formId=2242&email=mybusinessemail%40gmail.com"
  //   );
  // });

  // // //test case 10
  // it('Read the "BEST Canada Energy" customer story', () => {
  //   setupInterceptions();

  //   cy.visit("/");

  //   // не розумію чого не відображається клік по дропдаунах при тесті, тому пішов іншим шляхом
  //   cy.get('div[aria-hidden="true"]>a[href="/customer-stories"]').click({
  //     force: true,
  //   });

  //   cy.get("#4wrHkkvEgQncM8SCiLi7ZE").scrollIntoView().click({ force: true });

  //   cy.url().should(
  //     "eq",
  //     "https://telnyx.com/customer-stories/best-canada-energy"
  //   );

  //   cy.get("div>h1")
  //     .should("be.visible")
  //     .and("have.text", "BEST Canada Energy");
  // });
});
