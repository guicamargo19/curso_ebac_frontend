"use strict";
const formulario = document.getElementById('nome'); // Tipo HTMLElement
const campoNome = document.getElementsByTagName('form'); // Tipo um array HTMLCollectionOf com elementos HTMLFormElement
const botaoEnviar = document.getElementById("btn-enviar");
botaoEnviar === null || botaoEnviar === void 0 ? void 0 : botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault();
});
// Se alterarmos o tipo do evento para KeyboardEvent, o TS é inteligente para saber que não existe
// evento de clique com o teclado, apenas com o mouse, apontando erro.
/* botaoEnviar?.addEventListener('click', (e: KeyboardEvent) => { // ERRO
    e.preventDefault();
    }) */