
describe("Forgot", () => {

  it.only("should show success message when ApiForgot return 200", () => {
    cy.visit("/auth/forgot")

    cy.server()
    cy.route({
      method: 'POST',      // Route all GET requests
      url: '/api/forgot_password',
      response: []
    }).as("ApiForgot")

    cy.get("input[name=email]").type("brunooomelo")
    cy.contains("Enviar").click()
    cy.wait("@ApiForgot")
    cy.get("span#success").contains("Por favor, verifique seu e-mail.")
    cy.get("input[name=email]").should("have.value", "")
  })

})
