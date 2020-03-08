describe("Login form validation", function() {
  let $emailField, $passwordField, $submitButton;

  before(function() {
    cy.visit("/auth/login");
    $emailField = cy.get("label[for=email]");
    $passwordField = cy.get("label[for=password]");
    $submitButton = cy.get("button[content=Entrar]");
  });

  it("Verify if exist the fields: E-mail and Password", function() {
    $emailField.contains("E-mail:").get("input[name=email]");
    $passwordField.contains("Senha:").get("input[name=password]");
  });

  it("Send form without filling in the inputs", function() {
    $submitButton.click();

    $emailField.get("span:last-of-type").contains("E-mail é obrigatório");
    $passwordField.get("span:last-of-type").contains("Senha é obrigatória");
  });

  it("Send form with email invalid", function() {
    $emailField.get("input[name=email]").type("santiael");

    $submitButton.click();

    $emailField.get("span:last-of-type").contains("Preencha com email válido");
  });

  it("Send form with password invalid", function() {
    $passwordField.get("input[name=password]").type("1234567");

    $submitButton.click();
    $passwordField
      .get("span:last-of-type")
      .contains("Senha tem que ter 8 ou mais caracteres");
  });

  it("Send form with all fields valid", function() {
    $emailField.get("input[name=email]").type("rafaelsantiagods@gmail.com");
    $passwordField.get("input[name=password]").type("12345678");

    $submitButton.click();

    $emailField.get("span").should("have.length", 1);
    $passwordField.get("span").should("have.length", 1);
  });
});
