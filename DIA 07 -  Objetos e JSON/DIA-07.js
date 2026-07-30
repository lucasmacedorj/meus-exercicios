/* 

Objeto JavaScript: 

let chamado = {
    id: 1,
    titulo: "Erro ao abrir o programa",
    status: "Aberto",
    prioridade: "Alta"
}

console.log(chamado.status) */

/*

JASON: 

{
    "id": 1,
    "titulo": "Erro ao acessar o sistema",
    "status": "Aberto",
    "prioridade": "Alta"
} 
    
Convertendo objeto JS → texto JSON (pra enviar/guardar)
let objetoComoTexto = JSON.stringify(pessoa);

onvertendo texto JSON → objeto JS (pra usar no código)
let objetoDeVolta = JSON.parse(objetoComoTexto);


Exercício: crie um array de objetos representando 3 chamados de suporte e imprima só
os que estão com status "aberto". 


let chamados = [
    {id: 1, titulo: "Erro ao acessar o sistema", status: "Aberto", prioridade: "Alta"},
    {id: 2, titulo: "Erro ao resetar a senha", status: "Resolvido", prioridade: "Baixa"},
    {id: 3, titulo: "Relatório incompleto", status: "Em andamento", prioridade: "Média"},
    {id: 4, titulo: "Usuário não encontra determinada tratativa",status: "Resolvido", prioridade: "Baixa"},
    {id: 5, titulo: "Lentidão ao acessar o sistema", status: "Aberto", prioridade:"Alta"},
    {id: 6, titulo: "Erro ao tentar gerar etiqueta", status: "Aberto", prioridade: "Média"}
]

let chamadosAberto = chamados.filter(function(chamado){
    return chamado.status === "Aberto"
})

console.log(chamadosAberto)

ECERCICÍO 2: Usando o mesmo array de chamados (ou um parecido, com pelo menos 5 chamados), você precisa: 

Usar filter pra pegar apenas os chamados com prioridade "Alta" E status "Aberto" ao mesmo tempo (lembra do && que você já usou antes!)

Usar map no resultado filtrado pra criar uma nova lista, só com uma frase resumida de cada chamado, no formato:
   "Chamado #1: Erro ao acessar o sistema — URGENTE"

*/



let chamados = [
    {id: 1, titulo: "Erro ao acessar o sistema", status: "Aberto", prioridade: "Alta"},
    {id: 2, titulo: "Erro ao resetar a senha", status: "Resolvido", prioridade: "Baixa"},
    {id: 3, titulo: "Relatório incompleto", status: "Em andamento", prioridade: "Média"},
    {id: 4, titulo: "Usuário não encontra determinada tratativa",status: "Resolvido", prioridade: "Baixa"},
    {id: 5, titulo: "Lentidão ao acessar o sistema", status: "Aberto", prioridade:"Alta"},
    {id: 6, titulo: "Erro ao tentar gerar etiqueta", status: "Aberto", prioridade: "Média"}
]

let prioridadeAlta = chamados.filter(function(priority){
    return priority.prioridade === "Alta"
})

let resultado = chamados.map(function(result){
    return "Chamado #" + result.id + ": " + result.titulo + " - " + result.priority
})

console.log(prioridadeAlta)
console.log(resultado)
