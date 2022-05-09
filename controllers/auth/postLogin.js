import bcrypt from "bcrypt";
import db from "../../database/database.js";
import { v4 as uuid } from "uuid";
export default async function postLogin(req, res) {
  const { email, password } = req.body;
  const token = uuid();
  try {
    const user = await db.collection("credentials").findOne({ email });
    const loginValidation = bcrypt.compareSync(password, user.password);
    if (user && loginValidation) {
     await db.collection("sessions").insertOne({
        email,
        token,
      });
    }
    res.status(201).send({ token });
  } catch (e) {
    res.sendStatus(500);
  }
}
