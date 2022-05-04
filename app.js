import "dotenv/config";
import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
import chalk from "chalk";
const app = express();
app.use(express.json());
app.use(cors());
const mongoClient = new MongoClient(process.env.MONGO_URL);
let db;
async ()=> {
    try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.DATA_BASE);
    } catch(e) {
        console.log(chalk.red("ERRO"), "- Deu ruim ao tentar acessar o banco de dados.", e)
    }
}
app.get('/',(req,res) => {
    res.send('deu bom')
})
app.listen(process.env.PORTA);