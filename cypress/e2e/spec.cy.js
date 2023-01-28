describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://output.jsbin.com/usidix/1")
  });
  it("Click the button", () => {
    cy.contains("Click")
    cy.get("input").should("have.value", "Go!").click()
    cy.on("window:alert", function (alertText) {
      expect(alertText).eq("This is an alert box.")
    });
  });
});
