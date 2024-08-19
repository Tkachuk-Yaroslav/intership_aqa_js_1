class CustomerStoriesPage {
  get readCanadaLink() {
    return cy.get("#4wrHkkvEgQncM8SCiLi7ZE");
  }

  get selectedStoryTitle() {
    return cy.get("div>h1");
  }

  scrollToReadCanadaLink() {
    this.readCanadaLink.scrollIntoView();
  }

  clickOnReadCanadaLink() {
    this.readCanadaLink.click({ force: true });
  }

  compareUrl(expectedURL) {
    cy.url().should("eq", expectedURL);
  }

  shouldSelectedStoryTitle(arrValue) {
    this.selectedStoryTitle.should(arrValue[0]).and(arrValue[1], arrValue[2]);
  }
}

export default new CustomerStoriesPage();
