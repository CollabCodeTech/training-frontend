import React from "react";
import { useHistory } from "react-router-dom";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import ButtonCollab from "../../components/ButtonCollab";
import ActionCollab from "../../components/ActionCollab";
import FormAuth from "../../containers/FormAuth";
import useValidation from "../../libs/validation/useValidation";
import validation from "./validation";
import AuthService from "../../services/AuthService";

function FormLogin() {
  const {
    value,
    handleChange,
    handleSubmit,
    errors,
    setErrors
  } = useValidation(validation, sendUser, "name", "email", "password");
  const history = useHistory();

  function sendUser() {
    AuthService.signup(value)
      .withCredentials()
      .then(function() {
        history.replace("/dashboard");
      })
      .catch(function({ response }) {
        const { field, error } = response.body[0];
        setErrors({ [field]: error });
      });
  }

  return (
    <FormAuth noValidate onSubmit={handleSubmit}>
      <TitleCollab content="Cadastro" />

      <FieldCollab
        content="Nome:"
        htmlFor="name"
        id="name"
        name="name"
        value={value.name}
        onChange={handleChange}
        msgError={errors.name}
      />

      <FieldCollab
        content="E-mail:"
        htmlFor="email"
        id="email"
        name="email"
        value={value.email}
        onChange={handleChange}
        msgError={errors.email}
      />

      <FieldCollab
        content="Senha:"
        htmlFor="password"
        id="password"
        name="password"
        value={value.value}
        type="password"
        onChange={handleChange}
        msgError={errors.password}
      />

      <ButtonCollab content="Enviar" />
      <ActionCollab content="Já tenho cadastro" to="/auth/login" />
    </FormAuth>
  );
}

export default FormLogin;
