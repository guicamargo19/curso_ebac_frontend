"use strict";
// O TypeScript reconhece a estrutura do objeto
const alunos = [
    {
        nome: "Guilherme",
        cursos: ["Front-end", "Back-end", "Engenharia da Computação"],
        idade: 31
    },
    {
        nome: "Gabrielle",
        cursos: ["Crochê", "Identididade Visual", "Arquétipos"],
        idade: 30
    }
];
// Dessa forma, precisamos inserir exatamente a estrutura esperado pelo TS implicitamente.
//alunos.push("Julia")
const novosAlunos = {
    nome: "Lucas",
    idade: 23
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
