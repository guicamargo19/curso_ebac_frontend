const alunosComNotas = [];

class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.nota = '';
    }
    inserirNovoAluno(nome, nota) {
        alunosComNotas.push({nome, nota});
    }
    inserirNota(nota) {
        this.nota = nota;
        this.inserirNovoAluno(this.nome, this.nota);

    }
    mostrarNota() {
        console.log(`Aluno: ${this.nome} - Nota: ${this.nota}`)
    }

    alterarNota(novaNota) {
        this.nota = novaNota;
        let nota = this.nota;
        let nome = this.nome;
        alunosComNotas.forEach(function(alunos) {
            if (alunos.nome == nome) {
                alunos.nota = nota;
            }
        })
    }
}
// Alunos Aprovados (Nota Maior ou igual a 6)
const alunosAprovados = () => {
    console.log()
    console.log("Alunos Aprovados")
    console.log()
    alunosComNotas.forEach(function(alunos) {
        
        if (alunos.nota >= 6) {
            console.log(`Aluno: ${alunos.nome} -> Nota: ${alunos.nota}`)
        }
    })
}
// Alunos Reprovados (Nota Menor que 6)
const alunosReprovados = () => {
    console.log()
    console.log("Alunos Reprovados")
    console.log()
    alunosComNotas.forEach(function(alunos) {
        
        if (alunos.nota < 6) {
            console.log(`Aluno: ${alunos.nome} -> Nota: ${alunos.nota}`)
        }
    })
}

const todosOsAlunos = () => {
    console.log()
    console.log("Todos os alunos")
    console.log()
    alunosComNotas.forEach(function(alunos) {
    console.log(alunos)
    })
}

const aluno1 = new Aluno("Guilherme Camargo")
aluno1.inserirNota(10)
//aluno1.mostraNota()
const aluno2 = new Aluno("Gabrielle Tomoda")
aluno2.inserirNota(9.5)
const aluno3 = new Aluno("Giselle da Silva")
aluno3.inserirNota(5)
const aluno4 = new Aluno("Carlos Antonio")
aluno4.inserirNota(6)

aluno2.alterarNota(10)  
aluno3.alterarNota(4)

todosOsAlunos();
alunosAprovados();
alunosReprovados();