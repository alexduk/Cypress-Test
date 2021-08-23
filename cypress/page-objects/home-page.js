/// <reference types="cypress" />

class HomePage {
  elements = {
    myAccountButton: () => cy.contains("My Account"),
    dismissButton: () => cy.get(".woocommerce-store-notice__dismiss-link"),
    myWishlistButton: () => cy.contains("My Wishlist"),
    checkoutButton: () => cy.contains("Checkout"),
    siteIcon: () => cy.get('[alt="ToolsQA Demo Site"]'),
    searchButton: () => cy.get(".noo-search"),
    searchBox: () => cy.get(".search-header"),
    pinkTshirtZoomButton: () => cy.get("[data-id=1497]"),
    pinkTshirtZoomBox: () => cy.get(".quick-view-wrap"),
    pinkTshirtWishlistButton: () => cy.get('[data-product-id="1497"]'),
  };

  goToSignInPage() {
    this.elements.myAccountButton().click();
  }

  goToMyWishList() {
    this.elements.myWishlistButton().click();
  }

  goToCheckout() {
    this.elements.checkoutButton().click();
  }

  clickDismissButton() {
    this.elements.dismissButton().click();
  }

  wishListButtonColor() {
    this.elements
      .myWishlistButton()
      .should("have.css", "Color", "rgb(85, 85, 85)");
  }

  myAccountButtonColor() {
    this.elements
      .myAccountButton()
      .should("have.css", "Color", "rgb(85, 85, 85)");
  }

  checkoutButtonColor() {
    this.elements
      .checkoutButton()
      .should("have.css", "Color", "rgb(85, 85, 85)");
  }

  wishListButtonHref() {
    this.elements
      .myWishlistButton()
      .should("have.attr", "href", "https://shop.demoqa.com/wishlist/");
  }

  myAccountButtonHref() {
    this.elements
      .myAccountButton()
      .should("have.attr", "href", "https://shop.demoqa.com/my-account/");
  }

  checkoutButtonHref() {
    this.elements
      .checkoutButton()
      .should("have.attr", "href", "https://shop.demoqa.com/checkout/");
  }

  checkSiteIconVisibility() {
    this.elements.siteIcon().should("be.visible");
  }

  checkSiteIconSrc() {
    this.elements
      .siteIcon()
      .should(
        "have.attr",
        "src",
        "https://shop.demoqa.com/wp-content/uploads/2019/04/cropped-SHOP-1.png"
      );
  }

  checkSearchButton() {
    this.elements.searchBox().should("have.css", "display", "none");
    this.elements.searchButton().click();
    this.elements.searchBox().should("have.css", "display", "block");
  }

  checkZoomButtonExistence() {
    this.elements.pinkTshirtZoomButton().should("exist");
  }

  checkZoomButtonFunctionality() {
    this.elements.pinkTshirtZoomBox().should("not.exist");
    this.elements.pinkTshirtZoomButton().click({ force: true });
    this.elements.pinkTshirtZoomBox().should("exist");
  }

  checkWishlistButtonExistence() {
    this.elements.pinkTshirtWishlistButton().should("exist");
  }

  checkwishlistButtonFunctionality() {
    this.elements
      .pinkTshirtWishlistButton()
      .children()
      .should("have.length", 1);
    this.elements.pinkTshirtWishlistButton().click();
    this.elements
      .pinkTshirtWishlistButton()
      .children()
      .should("have.length", 0);
  }
}

export default new HomePage();
