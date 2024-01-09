"use strict";
// NAMESPACING pois não podem existir variáveis com mesmo nome em arquivos diferentes
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed();
    idade.length;
    idade.forEach(x => { console.log(x); });
})(casting || (casting = {}));
// cuidado ao usar o "as", se a variável não for o que o as está falando, o código
// vai quebrar.
