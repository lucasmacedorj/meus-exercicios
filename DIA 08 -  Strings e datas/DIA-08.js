/* DIA 08 - STRINGS E DATAS

1. toUpperCase() e toLowerCase() — Maiúsculas e minúsculas

let nome = "Leandro"

console.log(nome.toUpperCase())

let sobreNome = "Macedo"

console.log(sobreNome.toLowerCase()) */


 /* 2. trim() — Remove espaços em branco do início e do fim 

let entrada = "  lucas@gmail.com   "

console.log(entrada.trim()) */ 

/* 3. includes() — Verifica se um texto contém outro pedaço de texto

let frase = "Erro ao acessar a planilha"

console.log(frase.includes("erro")) */

/* 4. split() — Quebra uma string em um array, baseado num separador

let nome = "Leandro Lucas Macedo Dos Santos"
let partes = nome.split(" ")

console.log(partes) */

/* 

toUpperCase() / toLowerCase()	Muda a "caixa" do texto
trim()	Remove espaços das pontas
includes()	Testa se contém um trecho
split()	Quebra o texto num array

*/

// DATAS    

/* Por que trabalhar com datas em JavaScript é chato 

Essa é uma reclamação muito comum entre desenvolvedores, e por bons motivos. Vamos ver os principais: */

/*  1. Meses começam do zero, não do 1

let data = new Date(2026,0,3)
console.log(data) */ 

/* 2. Fusos horários são uma dor de cabeça 

let agora = new Date()

console.log(agora) */ 

/* 3. Formatar datas do jeito que você quer não é simples

Se você quer exibir uma data como "30/07/2026" (padrão brasileiro), o JavaScript não tem um jeito direto e simples de fazer isso nativamente — você acaba tendo que montar essa formatação manualmente, juntando dia, mês e ano com /, ou usando bibliotecas externas (como date-fns ou dayjs) pra facilitar. */ 

/* 4. Comparar datas não é tão intuitivo quanto comparar números  

let data1 = new Date(2026, 0, 1)
let data2 = new Date(2026, 0, 2)

console.log(data1 === data2)
console.log(data1 < data2) */

/* Exercício: escreva uma função que recebe um nome completo e retorna as iniciais em maiúsculo */ 


let nome = "leandro lucas macedo dos santos"
let palavras = nome.split(" ")

console.log(palavras)

let resultado = palavras.map(function(palavra){
    return palavra[0].toLocaleUpperCase()
})

console.log(resultado) 
console.log(resultado.join(""))



