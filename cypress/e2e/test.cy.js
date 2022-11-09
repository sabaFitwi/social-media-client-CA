describe("social media app", () => {
  // The login form validates user inputs correctly based on API restrictions
  it("the login form validates user inputs correctly based on API restrictions", () => {
    cy.visit("/");
    cy.wait(800);
    cy.get("form#registerForm  div.modal-header  button[type='button']")
      .should("have.class", "btn-close")
      .click();

    cy.get("header [data-auth='login']").should("be.visible").click();

    cy.wait(800);
    cy.get("form#loginForm    input[type='email']")
      .should("be.visible")
      .type("saba.samuel@noroff.no")
      .should("have.value", "saba.samuel@noroff.no");
    cy.get(
      "form#loginForm  div.modal-body  div.form-floating > input[type='password']"
    )
      .should("be.visible")
      .type("Fitwi001")
      .should("have.value", "Fitwi001");
    cy.get("form#loginForm > div.modal-footer > button.btn-success")
      .contains("Login")
      .should("be.visible")
      .click({ force: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy;
  });
  // The create item form validates user inputs correctly based on API restrictions
  it(" create item form validates user inputs correctly based on API restrictions", () => {
    cy.wait(800);
    cy.visit("/?view=post");
    cy.get("#footerActions > a.btn")
      .contains("New Post")
      .should("be.visible")
      .click({ force: true });
    cy.get("form#postForm  input[name='title']")
      .should("be.visible")
      .type("Cypress testing")
      .should("have.value", "Cypress testing");
    cy.get("form#postForm   input[name='tags']")
      .should("be.visible")
      .type("cypress");
    cy.get("form#postForm input[name='media']")
      .should("be.visible")
      .type("https://picsum.photos/id/111/4400/2656");

    cy.get("form#postForm textarea[name ='body']")
      .should("be.visible")
      .type("Test cypress");
    cy.get("form#postForm > div.col-12 > button.btn-success")
      .should("be.visible")
      .click();
  });

  it("The logout button logs the user out when clicked", () => {
    cy.wait(800);
    cy.get("header [data-auth='logout']").should("be.visible").click();
  });
});
