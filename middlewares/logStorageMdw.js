import db from "../database/database.js";
export default async function logStorageMdw(req, res, next) {
  const email = req.email;
  try {
    const log = await db.collection("logs").findOne({ email });
    req.storage = log.storage;
  } catch (e) {
    res.sendStatus(500);
  }
  next();
}
