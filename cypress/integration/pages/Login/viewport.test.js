describe("Login page in different screen sizes", function() {
  it("Open page on Desktop", function() {
    cy.visit("/auth/login");
  });

  it("Open page on Mobile", function() {
    cy.visit("/auth/login");
    cy.viewport("iphone-5");
  });

  it("Open page on TV 4K", function() {
    cy.visit("/auth/login");
    cy.viewport(3840, 2160);
  });
});
