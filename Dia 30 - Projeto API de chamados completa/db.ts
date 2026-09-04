import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI as string
const client = new MongoClient(uri)

export async function conectarBanco() {
    await client.connect()
    console.log("Conectando ao MongoDB!")
    return client.db("projeto_final_chamados")
}

