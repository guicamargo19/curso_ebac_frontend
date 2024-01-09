// TypeScript em Programação Orientada a Objetos

class Pessoa {
    // Declarar a tipagem antes do construtor
    nome: string;
    // Usar o ponto de interração para atributos opcionais
    renda?: number;

    // Um parâmetro obrigatório não pode ficar depois de uma parâmetro opcional
    // Declarar a tipagem nos parâmetros do construtor do mesmo jeito
    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOi(): string {
        return `${this.nome} disse oi.`;
    }
}


class ContaBancaria {
    // Modificar privado (private) é acessado apenas pela classe onde foi criado,
    // nem as filhas tem acesso.
    protected saldo: number = 0;
    // Se fosse protegido (protected), aí sim teria acesso ao atributo por herança. Mas não pela instância.
    numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }
    // static método pode ser acessado apenas pela classe onde é declarada, nem filhas nem instâncias.
    static numeroBanco() {
        console.log("Número do Banco é: 4400")
    }

    // Métodos e atributos também podem ser privados
    private extrato() {
        return console.log(`R$ ${this.saldo}`);
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPF extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaPedro = new ContaBancariaPF(123123);
contaPedro.depositar(5000);
//contaPedro.extrato();
ContaBancaria.numeroBanco();
