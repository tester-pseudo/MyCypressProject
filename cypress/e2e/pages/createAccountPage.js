class CreateAccount {
  clickOnCreateAccountButton() {
    cy.contains("Create an Account").first().should("be.visible").click();
  }

  enterFirstName(firstName) {
    cy.get('[id="firstname"]').type(firstName);
  }

  enterLastName(lastName) {
    cy.get('[id="lastname"]').first().type(lastName);
  }

  addEmail() {
    const email = this.generateRandomEmail();
    cy.get('[id="email_address"]').type(email);
  }

  addInvalidEmail() {
    const email = "testtest";
    cy.get('[id="email_address"]').type(email);
  }

  addExistingEmail() {
    const email = "123test@mag.com ";
    cy.get('[id="email_address"]').type(email);
  }

  generateRandomEmail() {
    const randomEmail = `user${Math.floor(Math.random() * 100000)}@test.com`;
    return randomEmail;
  }

  enterPassword(password) {
    cy.get('[id="password"]').type(password);
  }

  enterConifmPassword(confirmPassword) {
    cy.get('[name="password_confirmation"]').first().type(confirmPassword);
  }

  userClickOnCreateAccountButton() {
    cy.wait(3000);
    cy.get('[class="action submit primary"]').should("be.visible").click();
  }

  userCreatedSuccessMessage() {
    cy.get('[class="messages"] div')
      .eq(1)
      .should("be.visible")
      .and("have.text", "Thank you for registering with Main Website Store.");
  }

  invalidEmailErrorMessage() {
    cy.get('[id="email_address-error"]')
      .should("be.visible")
      .and(
        "have.text",
        "Please enter a valid email address (Ex: johndoe@domain.com)."
      );
  }

  existingEmailErrorMessage() {
    cy.get('[data-ui-id="message-error"]')
      .invoke("text") // Missing dot fixed
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, " ").trim(); // Normalize spaces
        expect(normalizedText).to.include(
          "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account."
        );
      });
  }

  passwordMismatchMessage() {
    cy.get('[id="password-confirmation-error"]')
      .invoke("text") // Missing dot fixed
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, " ").trim(); // Normalize spaces
        expect(normalizedText).to.include(
          "Please enter the same value again."
        );
      });
  }

  weakPasswordMessage() {
    cy.get('[id="password-error"]')
      .invoke("text") // Missing dot fixed
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, " ").trim(); // Normalize spaces
        expect(normalizedText).to.include(
          "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."
        );
      });
  }
}

module.exports = new CreateAccount();