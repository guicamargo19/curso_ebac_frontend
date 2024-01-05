function Veiculo(fabricante, modelo, anoModelo, anoFabricacao, cor) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    let _cor = cor;

    this.setCor = function(novaCor) {
        _cor = novaCor;
        console.log(`A cor deste veículo ${this.fabricante} ${this.modelo} foi alterada para ${_cor}`);
    }
    
    this.getCor = function() {
        console.log(`A cor do veículo ${this.modelo} é: ${_cor}`);
    }

    this.acelerar = function() {
        console.log(`${this.modelo} está acelerando...`);
    }

    this.freiar = function() {
        console.log(`${this.modelo} está freiando...`);
    }

    this.segundosAte100 = function() {
        return console.log(`${this.modelo} vai de 0 km/h à 100 km/h em 20 segundos`);
    }
}

function Carro(fabricante, modelo, anoModelo, anoFabricacao, cor, portas, arCondicionado, cambio) {
    this.portas = portas;
    this.arCondicionado = arCondicionado;
    this.cambio = cambio;

    Veiculo.call(this, fabricante, modelo, anoModelo, anoFabricacao, cor);
}

function CarroSimples(fabricante, modelo, anoModelo, anoFabricacao, cor) {
    Carro.call(this, fabricante, modelo, anoModelo, anoFabricacao, cor, 2, "Não", "Manual")
}

function CarroCompleto(fabricante, modelo, anoModelo, anoFabricacao, cor) {
    Carro.call(this, fabricante, modelo, anoModelo, anoFabricacao, cor, 4, "Sim", "Automático")

    this.segundosAte100 = function() {
        return console.log(`${this.modelo} vai de 0 km/h à 100 km/h em 10 segundos`);
    }
}

carro_simples = new CarroSimples("Ford", "Mustang", 2020, 2019, "Preto");
//console.log(carro_simples);
carro_simples.getCor();
carro_simples.acelerar();
carro_simples.freiar();
carro_simples.segundosAte100();

carro_simples_2 = new CarroSimples("Volkswagen", "Gol", 2010, 2009, "Branco");
//console.log(carro_simples_2);
carro_simples_2.acelerar();
carro_simples_2.freiar();
carro_simples_2.segundosAte100();

carro_completo = new CarroCompleto("Ferrari", "F-480", 2023, 2022, "Prata");
//console.log(carro_completo);
carro_completo.getCor();
carro_completo.setCor("Branco");
carro_completo.acelerar();
carro_completo.freiar();
carro_completo.segundosAte100();

carro_completo_2 = new CarroCompleto("Tesla", "Model S", 2023, 2022, "Cinza");
//console.log(carro_completo_2);
carro_completo_2.acelerar();
carro_completo_2.freiar();
carro_completo_2.segundosAte100();


function Motocicleta(fabricante, modelo, anoModelo, anoFabricacao, cor, ignicaoEletrica, visorDigital) {
    this.ignicaoEletrica = ignicaoEletrica;
    this.visorDigital = visorDigital;
    
    Veiculo.call(this, fabricante, modelo, anoModelo, anoFabricacao, cor);
}

function MotocicletaSimples(fabricante, modelo, anoModelo, anoFabricacao, cor) {
    Motocicleta.call(this, fabricante, modelo, anoModelo, anoFabricacao, cor, "Não", "Não");

    this.segundosAte100 = function() {
        return console.log(`${this.modelo} vai de 0 km/h à 100 km/h em 15 segundos`);
    }
}

function MotocicletaCompleta(fabricante, modelo, anoModelo, anoFabricacao, cor) {
    Motocicleta.call(this, fabricante, modelo, anoModelo, anoFabricacao, cor, "Sim", "Sim");

    this.segundosAte100 = function() {
        return console.log(`${this.modelo} vai de 0 km/h à 100 km/h em 10 segundos`);
    }
}

moto_simples = new MotocicletaSimples("Honda", "CG-150", 2015, 2014, "Vermelha");
//console.log(moto_simples);
moto_simples.getCor();
moto_simples.setCor("Azul");
moto_simples.acelerar();
moto_simples.freiar();
moto_simples.segundosAte100();

moto_completa = new MotocicletaCompleta('Kawasaki', 'Ninja', 2023, 2022, "Preta");
//console.log(moto_completa);
moto_completa.acelerar();
moto_completa.freiar();
moto_completa.segundosAte100();