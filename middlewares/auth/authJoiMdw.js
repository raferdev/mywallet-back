import Joi from "joi";
export default async function authJoiMdw(req, res, next) {
  const authReq = req.body;
  const authScheme = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(8).max(16).required(),
  });
  const authValidation = authScheme.validate(authReq, { abortEarly: false });
  if (authValidation.error) {
    return res.status(400).send("Erro de sintaxe, requisição inválida!");
  }
  next();
}
