class CareersPage {
  get jobLink() {
    return cy.get(
      'a[href="https://boards.greenhouse.io/telnyx54/jobs/5968196003"]'
    );
  }

  get selectedJobTitle() {
    return cy.get('h1[class="app-title"]');
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

  removeAttr(value) {
    this.jobLink.invoke("removeAttr", value);
  }

  scrollToJobLink() {
    this.jobLink.scrollIntoView();
  }

  clickOnJobLink() {
    this.jobLink.click({ force: true });
  }

  shouldSelectedJobTitle() {
    this.selectedJobTitle.should("have.text", "Controller (Remote)");
  }
}

export default new CareersPage();
