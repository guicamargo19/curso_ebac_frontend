/// <reference types='cypress' />

describe("Teste na agenda de contatos", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    // Verifica se os 3 contatos já existentes foram renderizados
    it("Deve renderizar 3 contatos", () => {
        cy.get('.contato').should('have.length.at.least', 3)
    })
    
    // Insere um novo contato
    it('Deve inserir um novo contato', () => {
        cy.get('input[type="text"]').type("Guilherme Camargo")
        cy.get('input[type="email"]').type('camargo@gmail.com')
        cy.get('input[type="tel"]').type('17 996816158')
        cy.get('.adicionar').click()
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Guilherme Camargo')
        })
    })

    // Remove um contato
    it('Deve remover um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        cy.get('.contato').should('have.length', 3)
    })

    // Edita um contato
    it('Deve editar o email de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('teste@gmail.com')
        cy.get('.alterar').click()
    })
})