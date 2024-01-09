"use strict";
// TypeScript em Programação Orientada a Objetos
class Pessoa {
    // Um parâmetro obrigatório não pode ficar depois de uma parâmetro opcional
    // Declarar a tipagem nos parâmetros do construtor do mesmo jeito
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOi() {
        return `${this.nome} disse oi.`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        // Modificar privado (private) é acessado apenas pela classe onde foi criado,
        // nem as filhas tem acesso.
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    // static método pode ser acessado apenas pela classe onde é declarada, nem filhas nem instâncias.
    static numeroBanco() {
        console.log("Número do Banco é: 4400");
    }
    // Métodos e atributos também podem ser privados
    extrato() {
        return console.log(`R$ ${this.saldo}`);
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPF extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaPedro = new ContaBancariaPF(123123);
contaPedro.depositar(5000);
//contaPedro.extrato();
ContaBancaria.numeroBanco();
