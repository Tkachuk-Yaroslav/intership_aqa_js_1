class ShopTelnyxPage {
  get shopifySection() {
    return cy.get(
      "#shopify-section-template--14828910772302__featured-collection-0 > div > div > div > h2"
    );
  }

  get addItemBtn() {
    return cy.get(
      "#quick-add-template--14828910772302__featured-collection-06960027533390-submit"
    );
  }

  get cartDrawer() {
    return cy.get("cart-drawer.drawer.animate.active");
  }

  get addedItemLink() {
    return cy.get(
      'td[class="cart-item__details"]>a[href="/products/telnyx-classic-hat?variant=40466321965134"]'
    );
  }

  clickOnAddItemBtn() {
    this.addItemBtn.click();
  }

  scrollToShopifySection() {
    this.shopifySection.scrollIntoView();
  }

  shouldCartDriwerBeVisible() {
    this.cartDrawer.should("be.visible");
  }

  shouldAddedItemLink(arrValue) {
    this.addedItemLink.should(arrValue[0]).and(arrValue[1], arrValue[2]);
  }
}

export default new ShopTelnyxPage();
