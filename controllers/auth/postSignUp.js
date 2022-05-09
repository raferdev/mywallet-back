import db from "../../database/database.js";
import bcrypt from "bcrypt";
export default async function postSignUp(req, res) {
  const { name, email, password } = req.body;
  const passHash = bcrypt.hashSync(password, 10);
  try {
    const id = await db.collection("credentials").insertOne({
      email,
      password: passHash,
      securytQuest: false,
      securytAnswer: "",
    });
    await db.collection("perfil").insertOne({
      id:id._id,
      name,
      email,
      darkTheme: false,
    });
    await db.collection("logs").insertOne({
      id:id._id,
      storage: "0",
      in: [],
      out: [],
    });
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
}
