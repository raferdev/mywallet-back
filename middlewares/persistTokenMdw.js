import db from "../database/database.js";
export default async function persistTokenMdw(req, res,next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const session = await db.collection("sessions").findOne({token:JSON.parse(token)});
    if (!session) {
      return res.redirect('/sign-in');
    }
    req.email = session.email;
  } catch (e) {
    return res.sendStatus(401);
  }
  next();
}
