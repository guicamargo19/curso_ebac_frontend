function Pessoa(nome) {
    this.nome = nome;

    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome);

    this.mostraCargo = function() {
        console.log(this.cargo);
    }
}


const pessoa1 = new Pessoa('Guilherme');
console.log(pessoa1);

const funcionario1 = new Funcionario("Gabrielle", "Artesã", 3000);
console.log(funcionario1);

funcionario1.mostraCargo();
pessoa1.dizOi();