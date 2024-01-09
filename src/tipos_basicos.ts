// Bollean
let estaChovendo: boolean = false
estaChovendo = true

// Number
let idade: number = 37
let altura: number = 1.75

// String
const nacionalidade: string = "Brasileira"

// Array (apenas um tipo de dado dentro)
const nomes: string[] = ["Guilherme", "Gabrielle", "Josefina"]
const tecnologias: Array<string> = ['html', 'css', 'js']
// Array ReadOnly (Apenas leitura) método PUSH indisponível.
const notas: ReadonlyArray<number> = [7, 9, 6, 10]

// Tupla (Aceita vários tipos de dados, porém, na ordem de declaração)
const lista: [nome: string, idade: number, estudando: boolean] = ['Lucas', 40, true]

// Union Type (usando pipe para mais de um tipo de dado para uma variável)
let idadePessoa: number | string = 35
idadePessoa = "25 Anos"

// Any (qualquer tipo de dado) - Usar o menos possível
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = "dados"
dadosDaApi = [1, 2, "Dois"]
