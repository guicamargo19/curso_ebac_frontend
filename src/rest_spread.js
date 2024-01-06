function somar() {
    let soma = 0;

    // arguments não é um array, mas é iterável
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar(10, 20, 30))

// Operador REST (Pode receber apenas um argumento com rest operator)
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total
    }, 0)
    return soma;
}
console.log(somarComRest(10, 20, 30));

// Operador SPREAD (espalha os valores)
const timesDeSp = ["São Paulo", "Palmeiras", "Bragantino", "Santos"];
const timesDoRio = ["Botafogo", "Fluminense", "Vasco", "Bangu"];

const timesDeFutebol = [...timesDeSp, ...timesDoRio]
console.log(timesDeFutebol)

// Reaproveitando atributos de objetos
const carroDaAna = {
    modelo: "gol",
    marca: 'vw',
    motor: 1.6
}

const carroDaMaria = {
    ...carroDaAna,
    motor: 1.8
}

// Desestruturação (capturação de atributos do objeto)
const { motor: motorCarroAna } = carroDaAna;
const { motor: motorCarroMaria } = carroDaMaria; 
console.log(motorCarroAna)
console.log(motorCarroMaria)

const [time1, time2, time3, ...outrosTimes] = timesDeFutebol;
console.log(time1)
console.log(time2)
console.log(time3)
console.log(outrosTimes)