/// <reference types="cypress" />
require('cypress-plugin-tab')


describe('testando alura pic', () => {
  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home')
  });
  it('preencher formualario de inscricao', () => {
  
    //clicar no botao register now
    cy.contains('a','Register now').click();
    
    //clicar no botao register
    cy.contains('button','Register').click();
    
    //alerta email
    cy.contains("ap-vmessage","Email is required!").should("be.visible");
    
    //clicar no botao register
    cy.contains("button","Register").click();

    //full name
    cy.contains("ap-vmessage","Full name is required!").should("be.visible");
    //user name
    cy.contains("ap-vmessage","User name is required!").should("be.visible");
    //password
    cy.contains("ap-vmessage","Password is required!").should("be.visible");
  });

  it("deve dizer que o campo email é inválido",()=>{
    //clicar no botao register now
   cy.contains('a','Register now').click();
      
      cy.get('input[placeholder="email"]').type("123").tab();
      
      cy.contains("ap-vmessage","Invalid e-mail").should("be.visible");
  })

  it("deve dizer que o campo senha deve ter no minimo 8 caracteres", () => {
      //clicar no botao register now
      cy.contains('a','Register now').click();
      
      cy.get('input[placeholder="password"]').type("123").tab();
      
      cy.contains("ap-vmessage","Mininum length is 8").should("be.visible");
  });


})