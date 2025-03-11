class LoginPage {
  visit() {
    cy.visit("https://magento.softwaretestingboard.com/");
  }
  clickSignInButton() {
    cy.contains("Sign In").should("be.visible").click();
  }

  enterUsername(username) {
    cy.get('[id="email"]').type(username);
  }

  enterPassword(password) {
    cy.get('[type="password"]').first().type(password);
  }

  clickOnSignIn() {
    cy.get('[type="submit"]').eq(1).click();
  }

  InvalidAccountAlert() {
    cy.get('[role="alert"] div')
      .eq(0)
      .invoke("text")
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, " ").trim(); // Replaces multiple spaces with a single space
        expect(normalizedText).to.include(
          "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later"
        );
      });
  }

  InvalidEmailError() {
    cy.get("#email-error")
      .should("be.visible")
      .and(
        "have.text",
        "Please enter a valid email address (Ex: johndoe@domain.com)."
      );
  }

  BlankEmailAndPassError() {
    cy.get("#email-error")
      .should("be.visible")
      .and("have.text", "This is a required field.");

    cy.get("#pass-error")
      .should("be.visible")
      .and("have.text", "This is a required field.");
  }
}

module.exports = new LoginPage();
