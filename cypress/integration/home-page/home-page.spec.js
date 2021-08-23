/// <reference types="cypress" />

import HomePage from "../../page-objects/home-page";

describe("Home Page Test", () => {
    beforeEach(() => {
      cy.setup();
    });

    it('Navbar buttons color test', () => {
        HomePage.wishListButtonColor();
        HomePage.myAccountButtonColor();
        HomePage.checkoutButtonColor();
    });

    it('Navbar buttons href test', () => {
        HomePage.wishListButtonHref();
        HomePage.myAccountButtonHref();
        HomePage.checkoutButtonHref();
    })

    it('Site icon test', () => {
        HomePage.checkSiteIconVisibility();
        HomePage.checkSiteIconSrc();
    })

    it('Search button test', () => {
        HomePage.checkSearchButton();
    })

    it('Product zoom button test', () => {
        HomePage.checkZoomButtonExistence();
        HomePage.checkZoomButtonFunctionality();
    })

    it.only('Product wishlist test', () => {
        HomePage.checkWishlistButtonExistence();
        HomePage.checkwishlistButtonFunctionality();
    })
});