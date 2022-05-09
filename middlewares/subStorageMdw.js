import db from "../database/database.js";
export default async function subStorageMdw(req, res, next) {
  const email = req.email;
  const nstorage = parseInt(req.storage) - parseInt(req.body.value);
  try {
    await db
      .collection("logs")
      .updateOne({ email }, { $set: { storage: nstorage } });
  } catch (e) {
    return res.sendStatus(500);
  }
  next();
}
