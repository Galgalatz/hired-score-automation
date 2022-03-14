/// <reference types="cypress" />

describe('example test', () => {

  it('Open HiredScore website', () => {
    cy.visit('/')
  })

  it('Get Careers page on About Tab', () => {
    cy.get('.navigation-items>div').eq(3).trigger('mouseover') 
    
    cy.get('nav[aria-labelledby=w-dropdown-toggle-3]  > a').eq(2).should('have.attr', 'href').and('include', 'careers')
    .then((href) => {
      cy.visit(href)
    })

    cy.get('a[href*="#career-listing"]').click({force: true})

  })

  it('Verify URL - careers page', () => {
    cy.url().then(url => {
      const getUrl = url
      const msgStatus = (getUrl == 'https://www.hiredscore.com/careers#career-listing') ? 'success!' :  'failed';    
      cy.log('URL careers page verify '+msgStatus)     
    })  
  })

  it('Get A random open position career', () => {

    cy.get('.link-block.career-link-block-row').first().click()

  })

  it('Return back to careers page', () => {
    cy.go('back')
  })

  it('Click Press & Awards on Resource Tab', () => {
    cy.get('.navigation-items>div').eq(2).trigger('mouseover') 

    cy.get('nav[aria-labelledby=w-dropdown-toggle-2]  > a').eq(2).should('have.attr', 'href').and('include', 'press')
    .then((href) => {
      cy.visit(href)
    })
  })

  it('Verify URL - press page', () => {
    cy.url().then(url => {
      const getUrl = url
      const msgStatus = (getUrl == 'https://www.hiredscore.com/press') ? 'success!' :  'failed';    
      cy.log('URL careers page verify '+msgStatus)     
    })  
  })

})
