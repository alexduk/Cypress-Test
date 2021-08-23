/// <reference types="cypress" />

class MyAccountPage {
  elements = {
    usernameInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    loginButton: () => cy.contains("Log in"),
    logoutButton: () => cy.contains("Log out"),
    greetingText: () => cy.contains("Hello " + Cypress.env("username")),
    loginForm: () => cy.get(".u-column1"),
    registerForm: () => cy.get(".u-column2"),
    errorText: () => cy.get(".woocommerce-error > li"),
  };

  fillUsername(username) {
    this.elements.usernameInput().clear();
    if (username != "") {
      this.elements.usernameInput().type(username);
    }
  }

  fillPassword(password) {
    if (password != "") {
      this.elements.passwordInput().type(password);
    }
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.elements.loginButton().click();
  }

  logout() {
    this.elements.logoutButton().click();
  }

  doesGreetingTextExist() {
    this.elements.greetingText().should("exist");
  }

  doesLoginFormExist() {
    this.elements.loginForm().should("exist");
  }

  doesRegisterFormExist() {
    this.elements.registerForm().should("exist");
  }

  doesErrorMsgExist(msg) {
    this.elements.errorText().should(($div) => {
      const text = $div.text();
      expect(text).to.include(msg);
      console.log(text);
    });
  }
}

export default new MyAccountPage();
