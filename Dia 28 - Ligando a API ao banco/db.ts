import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI as string
const client = new MongoClient(uri)

export async function conectarBanco() {
    await client.connect()
    console.log("Conectado ao MongoDB!")
    return client.db("meubanco")
}

