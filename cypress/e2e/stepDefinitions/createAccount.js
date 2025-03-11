import { Given, When, And } from "@badeball/cypress-cucumber-preprocessor";
import CreateAccount from "../pages/createAccountPage";

Given("user click on create an account button in home page", () => {
  CreateAccount.clickOnCreateAccountButton();
});

When(
  "user enter firstName {string} and lastName {string}",
  (firstName, lastName) => {
    CreateAccount.enterFirstName(firstName);
    CreateAccount.enterLastName(lastName);
  }
);

When("user enter valid email in the Email field", () => {
  CreateAccount.addEmail();
});

When(
  "user enter password {string} and confirmPassword {string}",
  (password, confirmPassword) => {
    CreateAccount.enterPassword(password);
    CreateAccount.enterConifmPassword(confirmPassword);
  }
);

When("user click on create an account button", () => {
  CreateAccount.userClickOnCreateAccountButton();
});

When("validate account is created successfully message", () => {
  CreateAccount.userCreatedSuccessMessage();
});

When("user enter invalid email in the Email field", () => {
  CreateAccount.addInvalidEmail();
});

When("user enter existing email in the Email field", () => {
  CreateAccount.addExistingEmail();
});

When("validate invalid Email Error Message", () => {
  CreateAccount.invalidEmailErrorMessage();
});

When("validate already email registred Error Message", () => {
  CreateAccount.existingEmailErrorMessage();
});

When("validate password Mismatch Message", () => {
  CreateAccount.passwordMismatchMessage();
});

When("validate weak password Message", () => {
  CreateAccount.weakPasswordMessage();
});
