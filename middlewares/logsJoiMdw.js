import Joi from "joi";
export default async function logsJoiMdw(req, res, next) {
  const logReq = req.body;
  const logScheme = Joi.object({
    type: Joi.string().min(1).max(100).required(),
    value: Joi.number().required(),
  });
  const logValidation = logScheme.validate(logReq, { abortEarly: false });
  if (logValidation.error) {
    return res.status(400).send("Erro de sintaxe, requisição inválida!");
  }
  next();
}
