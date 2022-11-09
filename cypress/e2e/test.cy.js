describe("social media app", () => {
  //Loging in the test user that is allready registered
  it("the login form validates user inputs correctly based on API restrictions", () => {
    cy.visit("/");
    cy.wait(800);
    cy.get("form#registerForm  div.modal-header  button[type='button']")
      .should("have.class", "btn-close")
      .click();

    cy.get("header [data-auth='login']").should("be.visible").click();

    cy.wait(800);
    cy.get(
      "form#loginForm  div.modal-body div.form-floating  input[type='email']"
    )
      .should("be.visible")
      .type("saba.samuel@noroff.no")
      .should("have.value", "saba.samuel@noroff.no");

    cy.get(
      "form#loginForm  div.modal-body  div.form-floating > input[type='password']"
    )
      .should("be.visible")
      .type("Tobi1234")
      .should("have.value", "Tobi1234");

    cy.get("form#loginForm > div.modal-footer > button.btn-success")
      .contains("Login")
      .should("be.visible")
      .click({ force: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
  // Create function testing starts here
  it("the create item form validates user inputs correctly based on API restrictions", () => {
    cy.wait(800);
    cy.visit("http://127.0.0.1:5500/?view=post");
    cy.get("#footerActions > a.btn")
      .contains("New Post")
      .should("be.visible")
      .click({ force: true });

    cy.get("form#postForm  input[name='title']")
      .should("be.visible")
      .type("Cypress generated test post")
      .should("have.value", "Cypress generated test post");

    cy.get("form#postForm   input[name='tags']")
      .should("be.visible")
      .type("cypress");

    cy.get("form#postForm    input[name='media']")
      .should("be.visible")
      .type("https://picsum.photos/id/718/2274/1440");

    cy.get("form#postForm     textarea[name ='body']")
      .should("be.visible")
      .type(
        "This post was generated using cypress test tool. it will be deleted so the API is not cluttered up with test posts"
      );
    /**uncomment the section below you run the create test.*/
    cy.get("form#postForm > div.col-12 > button.btn-success")
      .should("be.visible")
      .click();
  });

  it("The logout button logs the user out when clicked", () => {
    cy.wait(800);
    cy.get("header [data-auth='logout']").should("be.visible").click();
  });
});
