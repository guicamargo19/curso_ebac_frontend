## E-mails

Cada plataforma de e-mail, como Yahoo, Gmail, Outlook e etc, renderizam de forma diferente
cada conteúdo de e-mail enviado e recebido. Por isso, temos que ter tolerância ao aplicar estilos
nos e-mails, pois, podem aparecer de forma diferente ao cliente a contra gosto do desenvolvedor.

- Fontes, margens e paddings, cores, dentre outras regras CSS podem ser alteradas e interpretas de
formas diferentes, recebendo muitas vezes aplicações automaticas. Uma das formas de impedir isso é aplicando CSS inline,
ou seja, diretamente na linha da tag do elemento no arquivo HTML, pois, é a maior especificidade de estilização a ser interpretada.

- Outra coisa é usar imagens prontas, ao invés de estilizar um texto, isso também garante que a imagem vai aparecer exatamente
como a colocamos.

- Para criar e-mails em HTML ainda usamos tags obsoletas e tabelas que são poucas usadas hoje em dia, como a tag center,
o atributo align, o atributo bgcolor, adentre outros.

- Para textos em negrito e itálico, procurar usar as tags "i" e "b" ao invés das regras font-weigth e font-style, visando
maior compatibilidade com navegadores.

- Não é possível usar Grids em e-mails, por serem regras muito modernas, com baixa compatibilidade com navegadores mais antigos,
temos então que simular uma grid usando divs, usando tables e adicionando colspan para extender a linha pelas colunas, e formatando
width, max-width, padding, até que o conteúdo se encaixe como uma grid.