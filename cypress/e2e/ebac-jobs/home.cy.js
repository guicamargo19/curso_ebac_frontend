/// <reference types='cypress' />

describe('Testes para a Home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it('Deve renderizar 4 vagas', () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
    it ('Deve filtrar por fullstack', () => {
        cy.get('.FormVagas_campo__E1ppF').type('fullstack') //{enter} dentro das aspas
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })

})