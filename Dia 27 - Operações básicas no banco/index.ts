import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI as string
console.log("Variável carregada: ", uri)
const client = new MongoClient(uri)


async function main() {
  try {
    await client.connect()
    console.log("Conectado ao MongoDB com sucesso!")

    const db = client.db("meubanco")  
    const colecao = db.collection("chamados")

    // InsertIOne insere somente um item

     /* const resultado = await colecao.insertOne({
      titulo: "Erro ao acessar o sistema",
      status: "Aberto"
    }) */ 

  // insertMany adiciona mais de um documento ou item

   const resposta = await colecao.insertMany([
    {titulo: "Erro ao redefinir a senha", status: "Fechado"},
    {titulo: "Travamentos e lentidões", status: "Aberto"},
    {titulo: "Erro em relatório", status: "Em andamento"}
   ])

   // Pega os Ids que acabaram de ser criados
    const idsInseridos = Object.values(resposta.insertedIds)

    //Busca só esses documentos específicos 
    const chamadosInseridos = await colecao.find({
      _id: {$in: idsInseridos}
    }).toArray()

    console.log("Os 3 chamados que acabei de inserir: ", chamadosInseridos)

  } finally {
    await client.close()
  }
}



main()