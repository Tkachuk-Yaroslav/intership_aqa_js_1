import { setupInterceptions } from "../support/interceptors";

import MainPage from "../../pages/main.page.js";
import ShopTelnyxPage from "../../pages/shopTelnyx.page.js";

describe("Testing telnyx shop page", () => {
  //test case 7
  it("Add the product to the cart on the store page", () => {
    setupInterceptions();

    cy.visit("/");
    MainPage.removeAttrInShopLink("target");
    MainPage.clickOnShopLink();

    ShopTelnyxPage.scrollToShopifySection();

    ShopTelnyxPage.clickOnAddItemBtn();

    ShopTelnyxPage.shouldCartDriwerBeVisible();
    ShopTelnyxPage.shouldAddedItemLink([
      "be.visible",
      "have.text",
      "Telnyx Classic Hat",
    ]);
  });

  //test case 8
  it("Delete the product from the cart on the store page", () => {
    setupInterceptions();

    cy.visit("/");

    MainPage.removeAttrInShopLink("target");
    MainPage.clickOnShopLink();

    ShopTelnyxPage.scrollToShopifySection();

    ShopTelnyxPage.clickOnAddItemBtn();

    ShopTelnyxPage.shouldCartDriwerBeVisible();

    ShopTelnyxPage.shouldAddedItemLink([
      "be.visible",
      "have.text",
      "Telnyx Classic Hat",
    ]);

    ShopTelnyxPage.clickOnRemoveAddedItemBtn();

    ShopTelnyxPage.shouldEmptyCartWrapBeVisible();

    ShopTelnyxPage.shouldEmptyCartTitle([
      "be.visible",
      "have.text",
      "Your cart is empty",
    ]);
  });
});
