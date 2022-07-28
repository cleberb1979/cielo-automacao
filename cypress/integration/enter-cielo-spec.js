/// <reference types="cypress" />

describe('Enter Cielo Application', () => {

    before(() => {
        cy.visit('https://www.cielo.com.br/')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('should catch basic acessibility testing issues from Cielo', () => {
        cy.visit('https://www.cielo.com.br/');
        cy.get('#lgpd-banner-accept-all').click()
        cy.injectAxe();
        cy.checkA11y();
    })
});
