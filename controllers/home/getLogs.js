import db from "../../database/database.js";
export default async function getLogs(req, res) {
  const email = req.email;
  try {
    const logs = await db.collection("logs").findOne({ email });
    return res.send(logs);
  } catch (e) {
    res.sendStatus(500);
  }
}
