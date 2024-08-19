class MainPage {
  get solutionsLink() {
    return cy.get('a[href="/solutions"]');
  }

  get headTitle() {
    return cy.get("div>h1");
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

  clickOnSolutionsLink() {
    this.solutionsLink.click({ force: true });
  }

  shouldHeadTitle() {
    this.headTitle.should("have.text", "Connectivity reimagined.");
  }
}

export default new MainPage();
