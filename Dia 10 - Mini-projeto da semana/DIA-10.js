/* EXERCICÍOS 

escreva um script que recebe um
array de chamados (objetos) e gera um relatório no terminal: quantos abertos, quantos fechados, e a lista de títulos dos abertos. */ 

let chamados = [
    {nome: "Joana Silva", prioridade: "Alta", descricao: "Erro ao fazer login", status: "Aberto"},
    {nome: "Abner Alves", prioridade: "Baixa", descricao: "Dúvida de uso do software", status: "Fechado"}, 
    {nome: "Luan Melo", prioridade: "Alta", descricao: "Usuário inativo", status: "Aberto"},
    {nome: "Estela Soares", prioridade:"Média", descricao: "Relatório incompleto", status: "Fechado"},
    {nome: "Abraão Tomé", prioridade: "Alta", descricao: "Usuário não encontrado", status: "Fechado"}, 
    {nome: "Ester Pereira", prioridade: "Baixa", descricao: "Informações incompletas no relatório de despesas e contas", status: "Fechado"}
]

let chamadosAbertos = chamados.filter(function(abertos){
    return abertos.status === "Aberto"
})

let chamadosFechados = chamados.filter(function(fechados){
    return fechados.status === "Fechado"
})


//console.log(chamadosAbertos)
//console.log(chamadosFechados)

console.log(chamadosAbertos.length)
console.log(chamadosFechados.length)


