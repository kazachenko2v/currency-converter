describe("active currency list", () => {
  it("delete first item", () => {
    cy.visit("/currency-converter/");

    cy.get('[data-testid="active-currency"]').should("have.length", 3);

    cy.get('[data-testid="icon-button"]').should("have.length", 3);
    cy.get('[data-testid="icon-button"]').first().click();

    cy.get('[data-testid="active-currency"]').should("have.length", 2);
  });
});

describe("header", () => {
  it("go to converter", () => {
    cy.visit("/currency-converter/");

    cy.get('[data-testid="link"]').eq(1).click();

    cy.url().should("include", "/converter");
  });

  it("go to main", () => {
    cy.visit("/currency-converter/converter");

    cy.get('[data-testid="link"]').eq(0).click();

    cy.url().should("equal", "http://localhost:3000/currency-converter/");
  });
});

describe("currency list", () => {
  it("add item", () => {
    cy.visit("/currency-converter/");
    cy.get('[data-testid="active-currency"]').should("have.length", 3);

    cy.get("input").eq(1).click();

    cy.get("li").eq(0).click();
    cy.get('[data-testid="active-currency"]').should("have.length", 4);
  });
});
