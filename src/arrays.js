const redesSociais = ["Facebook", "Instagram", "Twitter"];

// LAÇO FOR PADRÃO
/* for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil da rede social: ${redesSociais[i]}`)
} */

// LAÇO FOR ES6
redesSociais.forEach(function(nomeRedeSocial, indice) {
    console.log(`# ${indice} Eu tenho perfil da rede social: ${nomeRedeSocial}`)
})
// ----------------------------------------------------------
// FUNÇÃO MAP (cria outra array com alteração)
const numeros = [1, 2, 3, 4, 5]
const dobroNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2
})
console.log(dobroNumeros);

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']
const alunosComCurso = alunos.map(function(item) {
    return {
        nome: item,
        curso: "Frontend"
    }
})
console.log(alunosComCurso);
// ----------------------------------------------------------
// FUNÇÃO FIND E FINDINDEX (retorna o valor)
const paula = alunosComCurso.find(function(aluno) {
    return aluno.nome == "Paula";
})
console.log(paula)

const indicePaula = alunosComCurso.findIndex(function(aluno) {
    return aluno.nome == "Paula";
})
console.log(indicePaula)
// ----------------------------------------------------------
// FUNÇÃO EVERY (bool true or false)
alunosComCurso.push(
    {
        nome: "Lucio",
        curso: "Backend"
    }
)
const alunosFrontend = alunosComCurso.every(function(aluno) {
    // se todos os alunos são de frontend -> bool true or false
    return aluno.curso === 'Frontend';
})
console.log(alunosFrontend)
// ----------------------------------------------------------
// FUNÇÃO SOME (bool true or false)
const algumAlunoBackend = alunosComCurso.some(function(aluno) {
    return aluno.curso == "Backend";
})
console.log(algumAlunoBackend)
// ----------------------------------------------------------
// FUNÇÃO FILTER (retorna o valor)
const alunoDeBackend = alunosComCurso.filter(function(aluno) {
    return aluno.curso == "Backend";
})
console.log(alunoDeBackend)
// ----------------------------------------------------------
// FUNÇÃO REDUCE (reduz para um único valor)
// com números soma
const dezenas = [10, 20, 30, 40]
const soma = dezenas.reduce(function(acumulador, numeroAtual) {
    return acumulador += numeroAtual;
}, 0)
console.log(soma)

// com strings concatena
const nomes = alunosComCurso.reduce(function(acumulador, itemAtual) {
    return acumulador += `${itemAtual.nome} `;
}, '')
console.log(nomes)