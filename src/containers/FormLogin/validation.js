import { required, isEmail, minLength } from "../../libs/validation";

function validation(values) {
  const { email, password } = values;
  let errors = {};

  errors.email =
    required(email, "E-mail é obrigatório") ||
    isEmail(email, "Preencha com email válido");

  errors.password =
    required(password, "Senha é obrigatória") ||
    minLength(8, password, "Senha tem que ter 8 ou mais caracteres");

  return errors;
}

export default validation;
