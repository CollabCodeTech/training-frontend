describe("Page Dashboard", function() {
  it("Open page on Desktop", function() {
    cy.visit("/dashboard");
  });

  it("Open page on Mobile", function() {
    cy.visit("/dashboard");
    cy.viewport("iphone-5");
  });

  it("Open page on TV 4K", function() {
    cy.visit("/dashboard");
    cy.viewport(3840, 2160);
  });

  it("Verify if exist header on Web", function() {
    cy.visit("/dashboard");

    cy.get("header");
    cy.get("header > img");
    cy.get("header > div");
  });

  it("Verify if exist header on Mobile", function() {
    cy.visit("/dashboard");
    cy.viewport("iphone-5");

    cy.get("header");
    cy.get("header > img");
    cy.get("header > div").should("be.not.visible");
  });
});
