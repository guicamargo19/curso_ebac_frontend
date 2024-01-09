// Tipagem de funções

// Funções simples e padrão JS
function calculaArea(base: number, altura: number) {
    return base * altura
}

// Tipagem Arrow Function
const calculaArea2 = (base: number, altura: number): number => base * altura

// Operador REST
// void - Retorna Vazio/Nada
function somar(...numeros: number[]): void {
    //numeros.reduce();
    console.log(numeros)
}

// Retorno pode ter mais tipos com Union Type
function teste(): string | number {
    if (10 > 5) {
        return "Dez maior que cinco"
    } else {
        return 5
    }
}
const resultadoTeste = teste() // string ou number
