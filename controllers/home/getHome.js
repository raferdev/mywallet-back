import db from "../../database/database.js";
export default async function getHome(req, res) {
  const email = req.email;
  try {
    const user = await db.collection("perfil").findOne({ email });
    return res.send(user);
  } catch (e) {
    res.sendStatus(500);
  }
}
