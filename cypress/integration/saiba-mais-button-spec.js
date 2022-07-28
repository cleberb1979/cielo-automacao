/// <reference types="cypress" />

//saiba mais button Cielo Application

describe('Saiba Mais button', () => {

    before(() => {
        cy.visit('https://www.cielo.com.br/')
        cy.get('#lgpd-banner-accept-all').click()
    })

    it('should click on button Saiba Mais', () => {
        cy.get('.client-installment-text > .button').click()
        cy.get('[data-v-69c1d0d2=""][data-v-24fbc466=""] > .has-text-cielo-500')
            .should('contain', 'funciona')
        cy.injectAxe();
        cy.checkA11y();
    })
});