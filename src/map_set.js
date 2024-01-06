// MAP
let meuMap = new Map();
meuMap.set("nome", "Guilherme");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");
console.log(nome);

console.log(meuMap.has("nome"))
console.log(meuMap.size)
/* meuMap.clear()
console.log(meuMap.size) */

for (let key of meuMap.keys()) {
    console.log(key)
}

for (let value of meuMap.values()) {
    console.log(value)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// SET
const cpfs = new Set();
cpfs.add(34472140829);
cpfs.add(38886808890);
cpfs.add(12345678999);

console.log(cpfs)
// Obter valores apenas com for (values e keys não funcionam)

cpfs.forEach((valor) => {
    console.log(valor)
})

// SET não permite itens duplicados
// array para set
const array = ["Guilherme", "Gabrielle", "Giselle", "Carlos", "Guilherme"];
const arrayComoSet = new Set([...array]);
console.log(arrayComoSet)
// set para array
const arrayVindoDoSetSemDuplicados = [...arrayComoSet]
console.log(arrayVindoDoSetSemDuplicados)