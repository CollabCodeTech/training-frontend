import { required, isEmail } from "../../libs/validation";

function validation(values) {
  const { email } = values;
  let errors = {};

  errors.email =
    required(email, "E-mail é obrigatório") ||
    isEmail(email, "Preencha com email válido");

  return errors;
}

export default validation;
