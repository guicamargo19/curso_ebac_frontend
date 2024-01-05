const carro = {
    modelo: "Mustang",
    fabricante: "Ford",
    anoModelo: "2022",
    anoFabricacao: "2021",
    acelerar: function() {
        console.log("acelerar");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;

    this.acelerar = function() {
        console.log("Acelerar");
    }
}

const carro2 = new Carro("F 480", "Ferrari", 2023, 2022);
const carro3 = new Carro("Mustang", "Ford", 2025, 2021);

const novoCarro = Object.assign(carro2, carro3); 
console.log(novoCarro);


/* console.log(typeof carro2)
console.log(typeof carro)

console.log(carro2 instanceof Carro)
console.log(carro instanceof Object) */

console.log(carro.modelo)
console.log(carro["modelo"])
console.log(Object.keys(carro).length)
console.log(Object.values(carro))