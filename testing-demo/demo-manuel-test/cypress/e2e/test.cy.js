describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('demo', function() {
  cy.visit('www.flipkart.com')
  
  cy.get('#container [name="q"]').click();
  cy.get('#container [name="q"]').type('iphone 17{enter}');
  cy.get('#container div[data-id="MOBHFN6YKGBPYJZD"] div.RG5Slk').click();
  
});