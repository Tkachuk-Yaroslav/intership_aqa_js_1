class SolutionsPage {
  get solutionsHeader() {
    return cy.get('h1[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]');
  }

  get logo() {
    return cy.get(
      "#__next > div > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a"
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

  clickOnLogo() {
    this.logo.click({ force: true });
  }

  shouldSolutionsHeader() {
    this.solutionsHeader.should(
      "have.text",
      "Solutions for scaling your business"
    );
  }
}

export default new SolutionsPage();
