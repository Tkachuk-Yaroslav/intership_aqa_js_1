class PartnershipsPage {
  get partnershipForm() {
    return cy.get("#mktoForm_2242");
  }

  get firstName() {
    return cy.get("#FirstName");
  }

  get lastName() {
    return cy.get("#LastName");
  }

  get companyField() {
    return cy.get("#Company");
  }

  get emailField() {
    return cy.get("#Email");
  }

  get countryField() {
    return cy.get("#Phone_Number_Extension__c");
  }

  get phoneField() {
    return cy.get("#Phone_Number_Base__c");
  }

  get partnerType() {
    return cy.get("#Form_Partner_Type__c");
  }

  get addInfoField() {
    return cy.get("#Form_Additional_Information__c");
  }

  get applyBtn() {
    return cy.get('button[class="mktoButton"]');
  }

  scrollToPartnershipForm() {
    this.partnershipForm.scrollIntoView();
  }

  shouldPartnershipFormBeVisible() {
    this.partnershipForm.should("be.visible");
  }

  typeFirstName(value) {
    this.firstName.should("be.visible").type(value);
  }

  typeLastName(value) {
    this.lastName.should("be.visible").type(value);
  }

  typeCompantField(value) {
    this.companyField.should("be.visible").type(value);
  }

  typeEmailField(value) {
    this.emailField.should("be.visible").type(value);
  }

  typePhoneField(value) {
    this.phoneField.should("be.visible").type(value);
  }

  typeAddInfoField(value) {
    this.addInfoField.should("be.visible").type(value);
  }

  selectCountryField(value) {
    this.countryField.should("be.visible").select(value);
  }

  selectPartnerType(value) {
    this.partnerType.should("be.visible").select(value);
  }

  clickOnApplyBtn() {
    this.applyBtn.should("be.visible").click();
  }
}

export default new PartnershipsPage();
