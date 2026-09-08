import { MongoClient } from "mongodb";

    console.log("Variavél carregada: ", process.env.MONGODB_URI)

const uri = process.env.MONGODB_URI as string
const client = new MongoClient(uri)

export async function conectarBanco() {
    await client.connect()
    console.log("Conectando ao MongoDB!")
    return client.db("projeto_final_chamados")
}

