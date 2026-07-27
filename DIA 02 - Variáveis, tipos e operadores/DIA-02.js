// let cria uma variável que pode ser reatribuída depois

/* let cidade = "Rio de Janeiro";
cidade = "São Paulo";
console.log(cidade); */

// const cria uma variável constante, que não pode ser reatribuída depois de criada.

/* const cidade = "Rio de Janeiro"
console.log(cidade) */

/* const impede a reatribuição da variável, mas não impede que você mude o conteúdo interno de um objeto ou array: 

const estado = {nome: "Rio de Janeiro"}
estado.nome = "Santa Catarina"
console.log(estado.nome) /*

/* const cidade = {nome: "Rio de Janeiro"}
cidade.nome = "Belo Horizonte"
console.log(cidade) */

//Um detalhe importante sobre const e objetos/arrays const impede a reatribuição da variável, mas não impede que você mude o conteúdo interno de um objeto ou array:


/* Exercício: Escreva um script que guarda seu nome
e idade em variáveis e imprime "Meu nome é X e tenho Y anos */

let nome = "Leandro Lucas"
let idade = 27
console.log("Meu nome é " + nome + " e tenho " + idade + " anos de idade")

/* você sabe dizer a diferença entre = e === 

 RESPOSTA: O operador = é um operador de atribuição, que atribui um valor a uma variavél por exemplo. 
 
 E o === é um operador de comparação que tras apenas resultado true ou false */ 
