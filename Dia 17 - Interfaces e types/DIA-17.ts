/* Dia 17 — Interfaces e types 

vamos usar exatamente o exemplo do chamado de suporte que você já criou lá no Dia 07, mas agora tipado com TypeScript. Isso vai deixar bem claro por que interface/type são tão úteis.


*/

interface Chamado {
    id: number,
    titulo: string,
    status: string,
}

let chamado: Chamado = {
    id: 1,
    titulo: "Erro ao acessar o Pulse",
    status: "Resolvido"
};

/* Exercício: crie uma interface
para uma entidade do produto e uma função tipada que a recebe.  */


