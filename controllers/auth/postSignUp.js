import db from "../../database/database.js";
import bcrypt from "bcrypt";
export default async function postSignUp(req, res) {
  const { name, email, password } = req.body;
  const passHash = bcrypt.hashSync(password, 10);
  try {
     await db.collection("credentials").insertOne({
      email,
      password: passHash,
      securytQuest: false,
      securytAnswer: "",
    });
    await db.collection("perfil").insertOne({
      name,
      email,
      darkTheme: false,
    });
    await db.collection("logs").insertOne({
      email,
      storage: "0",
      hist:[],
    });
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
}
