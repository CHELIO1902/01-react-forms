/* eslint-disable no-undef */
/* describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

// mi primer test

describe('Mi primer test', () => {
  it('Lee Home en /', () => {
    // 01. Setup de estado en la pp
    cy.visit('/')
    // 02. ejecutamos acciones
    cy.get('h1')
      .contains('Home') // 03. Espero un resultado
  })
  // Vamos a logearnos como CUSTOMER
  it('Login como CUSTOMER', () => {
    // 01. Setup del Estado de la App
    // Intercept lo uso para saber cuando una llamada a API es resulta
    // y puedo esperarla con wait()
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')
    // 02. Ejecutamos acciones
    cy.get('#email').type('drstrange@marvel.com')
    cy.get('#password').type('multiverso')
    cy.get('button[type=submit]').click()
    cy.wait('@loginApi')
    cy.get('h1')
      .contains('Home') // 03. Espero un resultado
  })

  // Vamos a logearnos como CUSTOMER e ir a Secret
  it('Login como CUSTOMER y ver el mensaje de bienvenida en Secret', () => {
    // 01. Setup del Estado de la App
    // Intercept lo uso para saber cuando una llamada a API es resulta
    // y puedo esperarla con wait()
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')
    // 02. Ejecutamos acciones
    cy.get('#email').type('drstrange@marvel.com')
    cy.get('#password').type('multiverso')
    cy.get('button[type=submit]').click()
    cy.wait('@loginApi')
    cy.get('ul.nav').last().click()
    cy.contains('Bienvenido seas Cliente') // 03. Espero un resultado
  })
})
