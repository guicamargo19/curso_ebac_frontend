// Classe Abstrata padrão e class com ES6

/* function Pokemon(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
}

const pikachu = new Pokemon("Pikachu", "elétrico")
 */

class Pokemon {
    // ATRIBUTO PRIVADO DA CLASSE COM HASHTAG NA FRENTE DO NOME
    #hp = 100;

    constructor(nomePokemon, tipoPokemon) {
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }
    //MÉTODO POLIMORFISMO
    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com ${nomeAtaque}`);
    }
    // GETTER E SETTER ENCAPSULAMENTO
    receberAtaque() {
        this.#hp -= 10;
    }

    exibeHP() {
        console.log(this.#hp);
    }
 }

const pikachu = new Pokemon("Pikachu", 'elétrico');
pikachu.atacar("choque do trovão")
console.log(pikachu)

// HERANÇA com ES6 usa-se o comando extends
class Pikachu extends Pokemon {
    // Para criar os atributos usa-se o comando constructor
    constructor() {
        super("Pikachu", "elétrico")
    }
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

const pikachuDoAsh = new Pikachu();
console.log(pikachuDoAsh);
pikachuDoAsh.receberAtaque();
pikachuDoAsh.exibeHP();
pikachuDoAsh.atacar()

// Instâncias das classes filhas tambem são consideradas instâncias da classe mãe
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
