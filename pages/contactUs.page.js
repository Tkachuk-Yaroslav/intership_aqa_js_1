class ContactUsPage {
  get contactForm() {
    return cy.get("#mktoForm_1987");
  }

  shouldFormBeVisible() {
    this.contactForm.should("be.visible");
  }
}

export default new ContactUsPage();
