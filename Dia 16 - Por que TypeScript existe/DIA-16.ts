/*

O problema que o TypeScript resolve

Lembra de vários bugs que você teve ao longo desses dias? Vamos relembrar alguns:

Comparar 18 (número) com "18" (string) e a condição não bater
Chamar um método que não existe pra aquele tipo de dado (.toUpperCase() num número)
Acessar chamados.status quando chamados era um array, não um objeto individual
Passar undefined pra uma função sem perceber

Repare: todos esses erros só apareceram quando você rodou o código. O JavaScript não te avisa antes — ele só reclama na hora da execução, às vezes de um jeito confuso (lembra o Dia 09?).

O que é TypeScript, na essência

TypeScript é uma extensão do JavaScript que adiciona tipos — ou seja, você declara antecipadamente que tipo de dado uma variável, parâmetro ou retorno de função deveria ter. E o TypeScript verifica isso antes mesmo de rodar o código, avisando erros enquanto você ainda está escrevendo, direto no VS Code.

Comparando na prática
JavaScript puro (o que você já sabe)
javascript
function somar(a, b) {
  return a + b;
}

somar(5, "10"); // "510" — sem erro nenhum, mas resultado ERRADO (concatenou, não somou!)

Isso roda sem travar, mas devolve um resultado bem diferente do esperado — exatamente o tipo de "bug silencioso" que praticamos no Dia 09.

O mesmo código, em TypeScript
typescript
function somar(a: number, b: number) {
  return a + b;
}

somar(5, "10"); // ERRO NA HORA DE ESCREVER, antes mesmo de rodar!

O TypeScript sublinha isso em vermelho no VS Code, mostrando algo como:

Argument of type 'string' is not assignable to parameter of type 'number'.

Você nem precisa rodar o código pra descobrir o problema — ele aparece enquanto você digita.

🧠 A ideia central, resumida

JavaScript só te avisa de erros de tipo durante a execução (às vezes de forma confusa, ou nem avisa, só dá resultado errado).
TypeScript te avisa antes de rodar, direto no editor, prevenindo bugs antes que eles cheguem a acontecer de verdade.

Por que isso importa tanto em projetos maiores

Nos exercícios que você fez até agora, os arquivos eram pequenos, então dava pra "ler tudo" e achar bugs manualmente. Mas imagina um sistema real, com milhares de linhas, várias pessoas mexendo no mesmo código — aí fica humanamente impossível "lembrar" o tipo de cada coisa. O TypeScript funciona como uma rede de segurança automática, avisando você (e seus colegas) sempre que algo não bate.

Um detalhe importante: TypeScript não "roda" sozinho

O navegador e o Bun não entendem TypeScript diretamente — ele precisa ser convertido (compilado) pra JavaScript puro antes de rodar. Isso normalmente acontece de forma automática nas ferramentas modernas (inclusive o Bun já lida com isso nativamente, sem configuração extra!).



*/


let idadeMinima: number = 18
let idadeUsuario: number = 18


if (idadeMinima === idadeUsuario) {
    console.log("Idade permitida")
} else {
    console.log("Idade proibida")
}

