// Assincronismo de tarefas foi possível com a ES6 já que o JS é singlethread

function funcaoPesada() {
    let execucao = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucao++;
    }
    return execucao;
}
// funcaoPesada está travando a operacao, o console.log("fim") aguarda.
/* console.log("Início")
console.log(funcaoPesada())
console.log("Fim") */

// Para isso existem as promises, permitindo resoluãoo assíncrona de tarefas

const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucao = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucaos++;
        }
        resolve(execucao);
    } catch(e) {
        reject("Erro de processamento!")
    }
})

// console.log("Fim") será mostra primeiro que a promise.
/* console.log("Início")
funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
console.log("Fim") */

/* Para transforma uma função assíncrona em síncrona, ou seja, se quisermos aguardar a resolução
da promise para continuar a execução do programa, temos os comandos async e await */

// Promises com parâmetros
const promisesComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

async function execucaoPrincipal() {
    console.log("Início")

    promisesComParametros("gui.ferreira.camargo@gmail.com", 123456).then(resultado => console.log(resultado))
    //await funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    // Outra forma de usar await obrigatório uso de try e catch
    try {
        const resultado = await funcaoPesadaPromise;
        console.log(resultado);
    } catch(e) {
        console.log(e)
    }
    console.log("Fim")
}

execucaoPrincipal();

