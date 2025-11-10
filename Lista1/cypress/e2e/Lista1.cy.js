Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros da aplicação para não falhar os testes
  return false
});

describe('Testes de Login e Compra - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('1 - Login com sucesso', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain.text', 'Products');
  });

  it('2 - Login com falha (senha incorreta)', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('senha_errada');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
  });

  it('3 - Adicionar produto ao carrinho', () => {
    cy.loginSauceDemo();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('contain.text', '1');
  });

  it('4 - Remover produto do carrinho', () => {
    cy.loginSauceDemo();
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('.shopping_cart_badge').should('contain.text', '1');
    cy.get('#remove-sauce-labs-bike-light').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('5 - Finalizar compra com sucesso', () => {
    cy.loginSauceDemo();
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    cy.get('#first-name').type('Cliente');
    cy.get('#last-name').type('Cliente');
    cy.get('#postal-code').type('12345-000');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
  });

  it('6 - Logout com sucesso', () => {
    cy.loginSauceDemo();
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });
});

// Função customizada para login rápido
Cypress.Commands.add('loginSauceDemo', () => {
  cy.visit('/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});
