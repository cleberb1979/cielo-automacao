/// <reference types="cypress" />

describe('Cielo navigation', () => {

    before(() => {
        cy.visit('https://www.cielo.com.br/')
        cy.get('#lgpd-banner-accept-all').click()
    })

    it('should click on Confira todas as soluções button', () => {
        cy.wait(2000)
        cy.get('.is-centered > .link.has-text-centered > a > strong').click()
        cy.get('h1 > .title')
            .should('contain', 'ideal')
        cy.get('.award-sliders > :nth-child(1) > .custom-title')
            .should('contain', 'Simplificar')
        cy.injectAxe();
        cy.checkA11y();
    })
});