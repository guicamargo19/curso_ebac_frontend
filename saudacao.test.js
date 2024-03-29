const saudacao = require('./saudacao')

describe("Teste de saudacao", () => {
    test('Deverá retornar Olá, Maria.', () => {
        const olaMaria = saudacao.dizOi('Maria')
        expect(olaMaria).toBe('Olá, Maria')
    })
})