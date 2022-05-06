import { MongoClient } from "mongodb";
import "dotenv/config";
import chalk from "chalk";
const mongoClient = new MongoClient(process.env.MONGO_URL);
let db;
try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.DATA_BASE);
    console.log(chalk.green("conectado","- database mongo DB"))
    } catch(e) {
        console.log(chalk.red("ERRO"), "- Deu ruim ao tentar acessar o banco de dados.", e)
    }
export default db;