import db from "../../database/database.js";
import dayjs from "dayjs";
export default async function postNewDeb(req, res) {
  const email = req.email;
  const { type, value } = req.body;
  const log = {
    id: Date.now(),
    date: dayjs().format("DD/MM HH:mm"),
    operation: "in",
    type,
    value,
  };
  try {
    await db.collection("logs").updateOne({ email }, { $push: { hist: log } });
    return res.redirect("/home");
  } catch (e) {
    res.sendStatus(500);
  }
}
