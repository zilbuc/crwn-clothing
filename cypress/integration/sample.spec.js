describe('My first test', () => {
  it('visits Crwn Clothing local site', () => {
    cy.visit('localhost:3000')

    cy.contains('SHO').click()

    cy.url()
      .should('include', 'http://localhost:3000/shop')

    cy.contains('HATS').click()

    cy.url()
      .should('include', 'http://localhost:3000/shop/hats')

  })
})