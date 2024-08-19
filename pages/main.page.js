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

  get contactUsLink() {
    return cy.get('div[class="c-glDvHT"]>a[href="/contact-us"]');
  }

  get shopLink() {
    return cy.get('a[href="https://shop.telnyx.com"]');
  }

  get signUpBtn() {
    return cy.get("#header-sign-up");
  }

  get partnershipsLink() {
    return cy.get('div[aria-hidden="true"]>a[href="/partnerships"]');
  }

  get customerStoriesLink() {
    return cy.get('div[aria-hidden="true"]>a[href="/customer-stories"]');
  }

  clickOnSolutionsLink() {
    this.solutionsLink.click({ force: true });
  }

  clickOnCareersLink() {
    this.careersLink.click({ force: true });
  }

  clickOnContactUsLink() {
    this.contactUsLink.click({ force: true });
  }

  clickOnSignUpBtn() {
    this.signUpBtn.click({ force: true });
  }

  clickOnShopLink() {
    this.shopLink.click({ force: true });
  }

  clickOnPartnershipsLink() {
    this.partnershipsLink.click({ force: true });
  }

  clickOnCustomerStoriesLink() {
    this.customerStoriesLink.click({ force: true });
  }

  shouldHeadTitle() {
    this.headTitle.should("have.text", "Connectivity reimagined.");
  }

  scrollToCareersLink() {
    this.careersLink.scrollIntoView();
  }

  removeAttrInShopLink(value) {
    this.shopLink.invoke("removeAttr", value);
  }
}

export default new MainPage();
