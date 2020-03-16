describe("Page Forgot", function() {
  it("Verify if exist the field E-mail", function() {
    cy.visit("/auth/forgot");

    cy.contains("E-mail:");
    cy.get("input[name=email]");
  });

  it("Send form without filling in the email input", function() {
    cy.visit("/auth/forgot");
    cy.contains("Enviar").click();

    cy.contains("E-mail é obrigatório");
  });

  it("Send form with email invalid", function() {
    cy.visit("/auth/forgot");
    cy.get("input[name=email]").type("empix");
    cy.contains("Enviar").click();
    cy.contains("Preencha com email válido");
  });

  it("Send form with all fields valid", function() {
    cy.visit("/auth/forgot");
    cy.get("input[name=email]").type("any.email@gmail.com");
    cy.contains("Enviar").click();
  });
});
