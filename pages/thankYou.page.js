class ThankYouPage {
  get title() {
    return cy.get("h1>span");
  }

  shouldTitle(arrValue) {
    this.title.should(arrValue[0]).and(arrValue[1], arrValue[2]);
  }

  compareUrl(expectedURL) {
    cy.url().should("eq", expectedURL);
  }
}

export default new ThankYouPage();
