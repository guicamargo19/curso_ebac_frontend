const calc = require('./calculadora')

// Switch de testes
describe('Teste para a calculadora', () => {
    test('somar 2 e 2 deve resultar em 4', () => {
        const minhaSoma = calc.somar(2, 2)
    
        // Fazemos um asserção
        expect(minhaSoma).toBe(4)
    })
    
    test('multiplicar 3 e 3 deve resultar em 9', () => {
        const minhaMultiplicacao = calc.multiplicar(3, 3)
    
        expect(minhaMultiplicacao).toBe(9)
        expect(minhaMultiplicacao).toBeGreaterThan(8)
    })
})