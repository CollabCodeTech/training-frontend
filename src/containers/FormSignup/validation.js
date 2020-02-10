import { required, isEmail, minLength } from "../../libs/validation";

function validation(values) {
  const { name, email, password } = values;
  let errors = {};

  errors.name =
    required(name, "Nome é obrigatório") ||
    minLength(2, name, "Nome tem que ter 2 ou mais caracteres");

  errors.email =
    required(email, "E-mail é obrigatório") ||
    isEmail(email, "Preencha com email válido");

  errors.password =
    required(password, "Senha é obrigatória") ||
    minLength(8, password, "Senha tem que ter 8 ou mais caracteres");

  return errors;
}

export default validation;
