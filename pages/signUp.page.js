class SignUpPage {
  get emailField() {
    return cy.get("#email").as("emailField");
  }

  get firstName() {
    return cy.get("#first_name");
  }

  get lastName() {
    return cy.get("#last_name");
  }

  get password() {
    return cy.get("#password");
  }

  get termsCheckbox() {
    return cy.get("#terms_and_conditions");
  }

  get signUpBtn() {
    return cy.get(
      'button[class="c-kDQqQr c-kDQqQr-fwzCzT-background-light c-kDQqQr-cOvXws-cv c-ddSKil"]'
    );
  }

  get errorMessage() {
    return cy.get(
      "#__next > div > main > section > div.c-cUhiIV.c-cFpcyF > div > div.c-kbJYtg > div > form > div.c-UUKrH.c-UUKrH-kDyeyw-type-error"
    );
  }

  //   get loginButton() {
  //     return cy.get(".radius");
  //   }

  //   setUsernameInput(value) {
  //     this.username.type(value);
  //   }

  //   setPasswordInput(value) {
  //     this.password.type(value);
  //   }

  clickOnEmailField() {
    this.emailField.click({ force: true });
  }

  clickOnFirstName() {
    this.firstName.click({ force: true });
  }

  clickOnLastName() {
    this.lastName.click({ force: true });
  }

  clickOnPassword() {
    this.password.click({ force: true });
  }

  clickOnTermsCheckbox() {
    this.termsCheckbox.click({ force: true });
  }

  clickOnSignUpBtn() {
    this.signUpBtn.click({ force: true });
  }

  typeInEmailField(value) {
    this.emailField.type(value);
  }

  typeInFirstName(value) {
    this.firstName.type(value);
  }

  typeInLastName(value) {
    this.lastName.type(value);
  }

  typeInPassword(password) {
    this.password.type(password);
  }
}

export default new SignUpPage();
