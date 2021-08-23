/// <reference types="cypress" />

import HomePage from "../../page-objects/home-page";
import MyAccountPage from "../../page-objects/my-account-page";

describe("Login & Logout Test", () => {
  beforeEach(() => {
    cy.setup();
    HomePage.goToSignInPage();
  });

  it('General login page test', () => {
    MyAccountPage.doesLoginFormExist();
    MyAccountPage.doesRegisterFormExist();
  });

  it('Requires not empty username field', () => {
    MyAccountPage.login('', Cypress.env('password'));
    MyAccountPage.doesErrorMsgExist('Error: Username is required.');
  });

  it('Requires not empty password field', () => {
    MyAccountPage.login(Cypress.env('username'), '');
    MyAccountPage.doesErrorMsgExist('Error: The password field is empty.');
  });

  it('Requires not empty username and password fields', () => {
    MyAccountPage.login('', '');
    MyAccountPage.doesErrorMsgExist('Error: Username is required.');
  });

  it('Requires valid username and password', () => {
    MyAccountPage.login('invalid-username', 'invalid-password');
    MyAccountPage.doesErrorMsgExist('ERROR: The username or password you entered is incorrect. Lost your password?');
  });

  it('Successful login', () => {
    MyAccountPage.login(Cypress.env('username'), Cypress.env('password'));
    MyAccountPage.doesGreetingTextExist();
  });

  it.only('Logout', () => {
    cy.login();
    MyAccountPage.logout();
    MyAccountPage.doesLoginFormExist();
    MyAccountPage.doesRegisterFormExist();
  })
});
