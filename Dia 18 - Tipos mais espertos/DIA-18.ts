/* 

Dia 18 — Tipos mais espertos

Union Types (|) — "esse campo pode ser DESSE tipo OU DAQUELE"

Até agora, cada campo tinha um tipo só (string, number, boolean). Mas na vida real, às vezes um campo pode aceitar mais de um tipo válido.

Exemplo prático: o id de um chamado

Imagina que, no seu sistema, alguns chamados antigos têm id numérico (1042), mas chamados mais novos usam um código alfanumérico ("CH-2024-042"). O campo id precisa aceitar os dois formatos. 


*/ 

/* interface Cliente {
    id: number | string;
    nome: string,
    idade: string | number
}


interface Chamado {
  id: number | string;
  titulo: string;
  status: string;
} 

interface Chamado {
    status: "Aberto" | "Em andamento" | " Resolvido "
}
    
Campos Opcionais (?) — "esse campo pode existir ou não"

Às vezes, um campo não é obrigatório em todo objeto. Por exemplo: nem todo chamado tem uma data de resolução — só os que já foram resolvidos.

interface Chamado {
    id: number,
    nome: string,
    status: string
    dataResolucao?: string | Date
}

Exercício: tipe uma função que aceita um id que pode ser
número ou texto. 


function buscaPorId(id: number | string) {
    console.log("Buscando por ID " + id)
}

buscaPorId("15")

*/

/* Exercício: Calculadora com union type

Objetivo: criar uma função que recebe dois valores (que podem ser number ou string), e retorna a soma dos dois — mas com um detalhe importante pra pensar. */ 

function somar(a: number | string, b: number | string ) {

    let numeroA = Number(a)
    let numeroB = Number(b)

    let resultado = numeroA + numeroB

    console.log("O Resultado da soma entre: " + numeroA + " e " + numeroB + " é: " + resultado)

}

somar("30",75)


