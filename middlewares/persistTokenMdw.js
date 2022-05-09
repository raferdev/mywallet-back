import db from "../database/database.js";
export default async function persistTokenMdw(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.redirect('/login');
  }
  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) {
      return res.redirect('/login');
    }
  } catch (e) {
    return res.sendStatus(500);
  }
  next();
}
