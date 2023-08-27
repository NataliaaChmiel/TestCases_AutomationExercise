//Register User with existing email

import { faker } from "@faker-js/faker";

describe("Register User with existing email", () => {
  it("Register User with existing email", () => {
    const randomEmail = faker.internet.email();
    const password = "password";
    cy.visit("http://automationexercise.com");

    // Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });

    //Verify 'New User Signup!' is visible
    cy.get(".signup-form").should("exist");

    //Enter name and email address
    cy.get(".signup-form").within(() => {
      cy.get("input[data-qa=signup-name]").type("imie");
      cy.get("input[data-qa=signup-email]").type(randomEmail);
      cy.get("button[data-qa=signup-button]").click();
    });

    //Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(".login-form").should("exist");

    //Fill details: Title, Name, Email, Password, Date of birth
    cy.get(".login-form").within(() => {
      cy.get('input[type="radio"]').check();
      cy.get("input[data-qa=password]").type(password);
      cy.get("select[data-qa=days]").select("19");
      cy.get("select[data-qa=months]").select("10");
      cy.get("select[data-qa=years]").select("2000");
    });

    //Select checkbox 'Sign up for our newsletter!'& Select checkbox 'Receive special offers from our partners!'
    cy.get("[type=checkbox]").check();

    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get(".login-form").within(() => {
      cy.get("input[data-qa=first_name]").type("Natalia");
      cy.get("input[data-qa=last_name]").type("Chmiel");
      cy.get("input[data-qa=company]").type("Grid Dynamics");
      cy.get("input[data-qa=address]").type("Wieś 123");
      cy.get("select[data-qa=country]").select("India");
      cy.get("input[data-qa=state]").type("India");
      cy.get("input[data-qa=city]").type("Bangladesz");
      cy.get("input[data-qa=zipcode]").type("20-2548");
      cy.get("input[data-qa=mobile_number]").type("127-589-621");
      cy.get("button[data-qa=create-account]").click();
    });

    //Verify that 'ACCOUNT CREATED!' is visible
    cy.get("[data-qa=account-created]").should("exist");

    //Click 'Continue' button
    cy.get("[data-qa=continue-button]").click();

    //Click 'Logout' button
    cy.get(".shop-menu").within(() => {
        cy.contains("a", "Logout").click();
    });

    // Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
        cy.contains("a", "Signup / Login").click();
      });
  
    //Verify 'New User Signup!' is visible
    cy.get(".signup-form").should("exist");

    //Enter name and email address
    cy.get(".signup-form").within(() => {
    cy.get('input[data-qa=signup-name]').type('imie');
    cy.get('input[data-qa=signup-email]').type(randomEmail);
    cy.get('button[data-qa=signup-button]').click();
    });

    cy.get(".signup-form").within(() => {
        cy.contains("p").should('exist');
      });
});
});