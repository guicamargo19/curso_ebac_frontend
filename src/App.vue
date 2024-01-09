<script setup>
import { reactive } from 'vue';

const nome = "Guilherme Camargo";
const meyObj = {
  nome: "Gabrielle",
  filmeFavorito: "Cartas para Julieta"
}

function dizOi(nome) {
  return `${nome} diz oi.`;
}
const imagemBatman = "";
const imagemSuperman = "https://t.ctcdn.com.br/sS0dqwq3BA9nGFigIH26q8YHOgI=/640x360/smart/i677638.jpeg";
const botaoDesabilitado = false;
const gostaDoBatman = false;
const gostaDoSuperman = false;

const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ["Guilherme", "Gabrielle", "Giselle", "Natália"],
  nomeAInserir: '',
})

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value;
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaValor() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function cadastrarNome() {
  if(estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir)
  } else {
    alert("Digite um nome");
  }
}
</script>

<template>
  <h1>{{ dizOi("Guilherme") }}</h1>

  <img v-if="gostaDoBatman" :src="imagemBatman" alt="Batman">
  <img v-else-if="gostaDoSuperman" :src="imagemSuperman" alt="">
  <h2 v-else>Não curte heróis</h2>

  <button :disabled="botaoDesabilitado">Enviar</button>

  <br />
  <hr />

  {{ estado.contador }}
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}
  <!-- Podemos passar uma arrow function direto no elemento HTML -->
  <!-- <input type="email" @keyup="evento => estado.email = evento.target.value"> -->
  <input type="email" @keyup="alteraEmail">

  <br />
  <hr />

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferência: {{ mostraSaldoFuturo() }} <br>
  <input class="campo" :class="{ invalido: !validaValor() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir R$"/>
  <button v-if="validaValor()">Transferir</button>
  <span v-else>Saldo insuficiente!</span>

  <br />
  <hr />

  <ul>
    <li v-for="nome in estado.nomes">
        {{ nome }}
    </li>
  </ul>
  <input type="text" @keyup="evento => estado.nomeAInserir = evento.target.value"/>
  <button @click="cadastrarNome" type="button">Cadastrar nome</button>
</template>

<style scoped>
  img {
    max-width: 200px;
  }
  .invalido {
    outline-color: darkred;
  }

  .campo {
    background-color: gray;
  }
</style>
