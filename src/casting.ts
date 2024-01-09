// NAMESPACING pois não podem existir variáveis com mesmo nome em arquivos diferentes
namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {console.log(x)})
}

// cuidado ao usar o "as", se a variável não for o que o as está falando, o código
// vai quebrar.

