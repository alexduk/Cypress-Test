// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import HomePage from "../page-objects/home-page";
import MyAccountPage from "../page-objects/my-account-page";

Cypress.Commands.add("setup", () => {
  cy.visit("/");
  HomePage.clickDismissButton();
});

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "https://shop.demoqa.com/my-account/",
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      username: Cypress.env("username"),
      password: Cypress.env("password"),
      login: "Log in",
      _wp_http_referer: "/my-account/",
      "woocommerce-login-nonce": "0bd533b246",
    },
  });

  cy.reload();
});

/* Cypress.Commands.add('login', () => {
    MyAccountPage.login(Cypress.env('username'), Cypress.env('password'));
}) */
