function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.nome = nome;
    let _salario = salario;

    // GETTER
    this.getSalary = function() {
        return `O salário de ${this.nome} é de R$ ${_salario}.`;
    }

    //SETTER
    this.setSalary = function(valor) {
        if (typeof valor === "number") {
            _salario = valor;
        }
    }
}

const funcionario1 = new Funcionario("Gabrielle", "Artesã", 3000);

funcionario1.setSalary(5000);
console.log(funcionario1.getSalary());