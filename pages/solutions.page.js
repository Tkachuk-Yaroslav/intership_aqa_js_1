class SolutionsPage {
  get solutionsHeader() {
    return cy.get('h1[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]');
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

  //   clickOnSolutionsLink() {
  //     this.solutionsLink.click({ force: true });
  //   }

  shouldSolutionsHeader() {
    this.solutionsHeader.should(
      "have.text",
      "Solutions for scaling your business"
    );
  }
}

export default new SolutionsPage();
