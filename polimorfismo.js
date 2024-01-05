function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.nome = nome;
    let _salario = salario;

    // GETTER
    this.getSalary = function() {
        return _salario;
    }

    //SETTER
    this.setSalary = function(valor) {
        if (typeof valor === "number") {
            _salario = valor;
        }
    }

    this.aumentaSalario = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);

    this.aumentaSalario = function() {
        const novoSalario = this.getSalary() * 1.07;
        this.setSalary(novoSalario);
    }
}

const funcionario1 = new Funcionario("Gabrielle", "Artesã", 3000);

funcionario1.setSalary(5000);
funcionario1.aumentaSalario();
console.log(funcionario1.getSalary());

const estagiario1 = new Estagiario("Pedro");
estagiario1.aumentaSalario();
console.log(estagiario1.getSalary());