// Exercício Módulo TypeScript

/* 
Utilizando o TypeScript e a tipagem escreva uma função de multiplicação que deverá
receber como argumentos dois números e retornar a multiplicação deles.
*/

// Função de Multiplicação
const multiplicar = (numero: number, numero2: number): number => numero * numero2;

console.log(multiplicar(10, 10)); // 100


/*
Escreva uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
*/

// Função de Saudação
function saudar(nome: string): string { 
    return ("Olá " + nome + "!");
}

console.log(saudar("Guilherme")); // Olá Guilherme!