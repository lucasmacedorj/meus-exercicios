/* Dia 17 — Interfaces e types 

vamos usar exatamente o exemplo do chamado de suporte que você já criou lá no Dia 07, mas agora tipado com TypeScript. Isso vai deixar bem claro por que interface/type são tão úteis.


*/
/*
interface Chamado {
    id: number,
    titulo: string,
    status: string,
}

let chamado: Chamado = {
    id: 1,
    titulo: "Erro ao acessar o Pulse",
    status: "Resolvido"
}; */

/* Exercício: crie uma interface
para uma entidade do produto e uma função tipada que a recebe.  

interface Chamado {
    id: number;
    titulo: string
    status: string;
    prioridade: string;
}

let exemplo: Chamado = {
    id: 1,
    titulo: "Erro no pulse",
    status: "Fechado",
    prioridade: "Alta"
}

function exibirChamado(chamado: Chamado) {
    console.log("ID: " + chamado.id + " | Título: " + chamado.titulo + " | Status: " + chamado.status + " | Prioridade: " + chamado.prioridade)
}

exibirChamado(exemplo)  */

//Criando a Interface

interface Cliente {
    id: number,
    nome: string,
    email: string,
    ativo: boolean
}

//Criando o objeto

let cliente1: Cliente = {
    id: 3697,
    nome: "Thiago",
    email: "thiago@!gmail.com",
    ativo: false,
}

function verificarStatusCliente(cliente: Cliente) {
    
    if (cliente.ativo === true) {
        console.log("Cliente: " + cliente.nome + " ESTÁ ATIVO !! ")
    } else {
        console.log("Cliente: " + cliente.nome + " NÃO ESTÁ ATIVO ")
    }
}

verificarStatusCliente(cliente1)

