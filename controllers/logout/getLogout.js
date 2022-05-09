import db from "../../database/database.js";

export default async function getLogout(req, res) {
  const email = req.email;
  try {
    await db.collection("sessions").deleteOne({ email });
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
}
