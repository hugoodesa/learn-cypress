describe("buscar fotos api alura", () => {
  it("buscar fotos do flavio", () => {
    const getApi = async () => {
      const { status, body } = await cy.request({
        method: "GET",
        url: Cypress.env("url_api"),
      });
      //console.log(response);
      cy.log(body);

      expect(status).to.be.equal(200);
      //expect(body[0]).to.have.property("login");
      //expect(body[0].login).to.be.equal("hugoodesa");
      cy.log(Cypress.env("login"));
      cy.log(Cypress.env("password"));
    };

    getApi();
  });
});
