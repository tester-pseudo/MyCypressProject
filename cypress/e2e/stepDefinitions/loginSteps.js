import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/loginPages";

Given("Load magento website", () => {
  LoginPage.visit();
});

When("Click on sign in button", () => {
  LoginPage.clickSignInButton();
  cy.reload();
});

When("Enter username {string} and password {string}", (username, password) => {
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
});

When("user click on the login button", () => {
  LoginPage.clickOnSignIn();
});

Then("user should be logged in successfully", () => {
  cy.reload();
  cy.wait(2000);
  cy.contains("Welcome, test test!").should("be.visible");
});

Then("validate invalid credential error message", () => {
  LoginPage.InvalidAccountAlert();
});

Then("validate invalid email error message", () => {
  LoginPage.InvalidEmailError();
});

Then("validate blank email error message", () => {
  LoginPage.BlankEmailAndPassError();
});
