import { setupInterceptions } from "../support/interceptors";

import SignUpPage from "../../pages/signUp.page.js";
import MainPage from "../../pages/main.page.js";

describe("Testing sign up page", () => {
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

  //test case 6
  it("Sign up to Telnyx with valid credentials", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.clickOnSignUpBtn();

    SignUpPage.clickOnEmailField();
    SignUpPage.typeInEmailField("emailisnotaprobl@gmail.com");

    SignUpPage.clickOnFirstName();
    SignUpPage.typeInFirstName("Tester");

    SignUpPage.clickOnLastName();
    SignUpPage.typeInLastName("Aqa");

    SignUpPage.clickOnPassword();
    SignUpPage.typeInPassword("Qwe123qwe123*");

    SignUpPage.clickOnTermsCheckbox();
    SignUpPage.clickOnSignUpBtn();

    //вибиває помилку замість переадресації
    cy.get("h1>span", { timeout: 10000 }).should("have.text", "One last step");
  });
});
