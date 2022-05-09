import Joi from "joi";
export default async function authLoginJoiMdw(req, res, next) {
  const authReq = req.body;
  const authSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(8).max(16).required(),
  });
  const authValidation = authSchema.validate(authReq, { abortEarly: false });
  if (authValidation.error) {
    return res.status(400).send(authValidation.error.details);
  }
  next();
}
