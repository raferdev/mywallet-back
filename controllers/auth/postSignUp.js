import db from "../../database/database.js";
import bcrypt from "bcrypt";
export default async function postSignUp(req, res) {
  const { name, email, password } = req.body;
  const passHash = bcrypt.hashSync(password, 10);
  try {
    await db
      .collection("credentials")
      .insertOne({ name, email, password: passHash });
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
}
