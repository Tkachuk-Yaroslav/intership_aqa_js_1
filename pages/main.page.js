class MainPage {
  get solutionsLink() {
    return cy.get('a[href="/solutions"]');
  }

  get headTitle() {
    return cy.get("div>h1");
  }

  get careersLink() {
    return cy.get('a[href="/careers"]');
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

  clickOnCareersLink() {
    this.careersLink.click({ force: true });
  }

  shouldHeadTitle() {
    this.headTitle.should("have.text", "Connectivity reimagined.");
  }

  scrollToCareersLink() {
    this.careersLink.scrollIntoView();
  }
}

export default new MainPage();
