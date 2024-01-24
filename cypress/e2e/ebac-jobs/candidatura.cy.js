/// <reference types='cypress' />

describe('Testes para a Home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it('Deve levar o usuário até o formulário de candidatura', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })
    it('Deve preencher o formulário de candidatura', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Guilherme Camargo')
        cy.get('input[name="email"]').type('camargo@gmail.com')
        cy.get('input[name="telefone"]').type('17 996817566')
        cy.get('input[name="endereco"]').type('Rua Siqueira Campos, 2260 - São Paulo')
        cy.get('select[name="escolaridade"]').select('bacharelado')
        cy.get('#mac').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-incricao-preenchido')
    })
})