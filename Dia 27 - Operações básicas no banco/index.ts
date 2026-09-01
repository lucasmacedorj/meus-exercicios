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

    const resultado = await colecao.insertOne({
      titulo: "Erro ao acessar o sistema",
      status: "Aberto"
    })

    console.log("Documento inserido com id:", resultado.insertedId)

  } finally {
    await client.close()
  }
}



main()