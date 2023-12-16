### SMACSS e Metodologia BEM

##SMACSS

É a modularização dos arquivos CSS por função geral. Sendo:

#Base
Onde estilizamos as regras mais básicas da página, propriedades que seguirão um padrão. {reset, font-family}

#Layout
É o componente maior do SMACSS que tem a função de conter outros componentes, como containers, header, footer.

#Module
São os componentes estilizados, geralmente estão localizados dentro do layout, como as classes dos elementos

#Estados
Um estado para escrever um estilo. Por convenção usa-se o prefixo "is-". Por exemplo se um formulário é inválido, aplicados uma classe "is-invalid" e sua estilização,
ou seja, o componente não tem aquela estilização, é apenas um estado do elemento.

#Theme
Tem como afetar a aparência das páginas e até fontes diferentes, exemplo os sites da Globo (G1, GE, GShow)

##Metodologia BEM

É a padronização da nomenclatura de elementos HTML para utilização nos seletores CSS. Sendo:
#Classes: .classe
#Elemento: .classe__elemento
#Modificador: .classe__elemento--modificador