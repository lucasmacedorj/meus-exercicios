/* Objetivo: consolidar convertendo algo que você já fez. Exercício: pegue o mini-projeto da
Semana 2 (relatório de chamados) e reescreva-o em TypeScript, com interfaces pros dados. */ 

export{} // linha "mágica" que transforma o arquivo num modulo isaolado

interface Chamado {
    id: number,
    titulo: string, 
    status: string,
    prioridade: string,
};

let chamados: Chamado[] = [
    
    {id: 1, titulo: "Erro ao acessar o sistema", status: "Aberto", prioridade: "Alta"},
    {id: 2, titulo: "Erro ao resetar a senha", status: "Resolvido", prioridade: "Baixa"},
    {id: 3, titulo: "Relatório incompleto", status: "Em andamento", prioridade: "Média"},
    {id: 4, titulo: "Usuário não encontra determinada tratativa",status: "Resolvido", prioridade: "Baixa"},
    {id: 5, titulo: "Lentidão ao acessar o sistema", status: "Aberto", prioridade:"Alta"},
    {id: 6, titulo: "Erro ao tentar gerar etiqueta", status: "Aberto", prioridade: "Média"}
]

let prioridadeAlta = chamados.filter(function(priority: Chamado){
    return priority.prioridade === "Alta"
})

let resultado = chamados.map(function(result: Chamado){
    return "Chamado #" + result.id + " : " + result.titulo + " - " + result.prioridade
})

console.log(prioridadeAlta)
console.log(resultado)