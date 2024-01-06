// ARROW FUNCTIONS
const minhaFuncao = () => "Diz Olá!"

console.log(minhaFuncao());

// Retorno de objetos
const retornoObjetos = () => (
    {
        modelo: "Mustang",
        fabricante: "Ford"
    }
)
console.log(retornoObjetos());

// Nenhum ou mais de um argumento precisa de parentese, senão não precisa
/* const filtraALuno = aluno => aluno.curso === 'Backend';
const filtraALunos = (aluno, indice) => aluno.curso === 'Backend';
 */

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    freiar: () => {this.velocidadeAtual -= 10}
}

carro.acelerar()
carro.freiar()

/* O contexto no VSCode e o no navegador são diferentes, por isso, quando usamos
this no VSCode não temos acesso ao contexto, já no navegador nós temos. */

// Por isso, usar funções normais para casos complexos, e para situações simples, podemos usar Arrow Functions