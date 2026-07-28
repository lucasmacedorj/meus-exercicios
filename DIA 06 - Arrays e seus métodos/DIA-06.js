// Dia 6 — Arrays e seus métodos

// USO 1. map — Transforma cada item, devolvendo um novo array do mesmo tamanho

/* 

Pensa assim: "pra cada item da lista, aplica uma transformação, e me devolve uma lista nova com os resultados." 

O que aconteceu: cada número da lista original foi multiplicado por 2, e o resultado virou um array novo, com a mesma quantidade de itens (5 itens entram, 5 itens saem).

Quando usar map: quando você quer transformar cada item de uma lista, mas manter a mesma quantidade de itens no final. Ex: dobrar valores, converter nomes pra maiúsculo, formatar preços, etc.


*/

/* map

let gols = [90,24,56,58,77,33]

let dobraDeGols = gols.map(function(gols){
    return gols * 2
})

console.log(dobraDeGols) */

/* filter 

Seleciona só os itens que passam num teste, devolvendo um array (possivelmente) menor

Pensa assim: "pra cada item da lista, testa uma condição (true/false), e só mantém os que passaram no teste."

O que aconteceu: o filter testou cada número (gol >= 20), e só manteve os que deram true (25 e 22). Os que deram false (10, 7, 15) foram descartados.

Quando usar filter: quando você quer selecionar apenas alguns itens de uma lista, baseado numa condição. Ex: pegar só os jogadores artilheiros, só os produtos em estoque, só os números pares. 

let gols = [30,36,52,56,58,47,96,10,36,20,2,3,7,9,5,]

let artilharia = gols.filter(function(gols) {
    return gols >= 30
})

console.log(artilharia) */ 

/* reduce Junta todos os itens num único valor final

Pensa assim: "pra cada item da lista, vai acumulando um resultado único, até sobrar só uma coisa no final."

O que aconteceu: o reduce foi somando cada número, um de cada vez, guardando o resultado parcial no acumulador, até sobrar um único número final (79, que é 10+25+7+22+15).

O 0 no final é o valor inicial do acumulador (começa em zero, antes de somar qualquer coisa).

Quando usar reduce: quando você quer transformar uma lista inteira em um único valor — uma soma, uma média, o maior valor, ou até juntar tudo numa única string. Ex: calcular o total de vendas, contar quantos itens passam numa condição, etc. */ 

/*

let gols = [18,58,56,57,33]

let soma = gols.reduce(function(acumulador,gol){
    return acumulador + gol
}, 0)

console.log(soma) 

*/

/*  forEach — Percorre cada item, mas não devolve nada (sem return útil)

Pensa assim: "pra cada item da lista, faz alguma coisa (tipo imprimir), mas não me devolve uma lista nova."

O que aconteceu: o forEach só executou uma ação (o console.log) pra cada item, mas não criou nenhum array novo. Se você tentar guardar o resultado dele numa variável, vai dar undefined. 

Isso acontece porque forEach ignora qualquer return que você colocar dentro dele — ele só serve pra executar uma ação repetida, não pra transformar ou devolver dados.

Quando usar forEach: quando você só quer fazer algo com cada item (imprimir, salvar num banco de dados, etc.), sem precisar de um array novo como resultado. Na prática, é bem parecido com um for tradicional, só que mais curto de escrever.


let gols = [33,25,36,14,20]

gols.forEach(function(gol){
    console.log("Gol Registrado: " + gol)
})

*/

/* find — Procura e devolve o primeiro item que passa num teste

Pensa assim: "percorre a lista, e assim que encontrar o primeiro item que bate com a condição, para e devolve só ele (não uma lista, um item só)." 

O que aconteceu: o find testou cada número (gol >= 20), e assim que achou o primeiro que bateu com a condição (25, na posição 1), ele parou de procurar e devolveu só esse valor — mesmo sabendo que 22 também bate com a condição mais na frente.

Compara com o filter (que devolveria todos que passam)

Quando usar find: quando você quer um único resultado específico, e sabe (ou espera) que só existe um item que interessa — tipo achar um usuário pelo ID, achar o primeiro produto fora de estoque, etc. Se nenhum item bater com a condição, find devolve undefined. */

/*

let gols = [33,25,10,26,28,33,42]

let artilharia = gols.find(function(gol){
    return gol >= 30
})

console.log(artilharia) 


map	Array - (mesma quantidade) -Transformar cada item
filter - Array (igual ou menor)	- Selecionar vários itens
reduce - Um valor único - Resumir/juntar tudo
forEach - Nada (undefined) - Executar uma ação repetida
find - Um item único (ou undefined) - Encontrar o primeiro que bate com a condição


*/ 

/* Exercício: dada uma lista de produtos com preço, use filter pra pegar os acima de R$100 e map pra aplicar 10% de desconto. Checkpoint: você sabe explicar a diferença entre map e filter . */

let produtos = [
    {nome: "Headset", preco: 250},
    {nome: "Iphone 17 PRO MAX", preco: 7500},
    {nome: "Monitor de 32º", preco: 2000},
    {nome: "Teclado", preco: 100},
    {nome: "Processador Intel", preco: 5000}
]

// filter

  let maiorProduto = produtos.filter(function(produto){
    return produto.preco > 1000
})

console.log(maiorProduto) 

// map 

let desconto = maiorProduto.map(function(desc){
    return {nome: desc.nome, preco: desc.preco - (desc.preco * 10 / 100)}
})

console.log(desconto) 



