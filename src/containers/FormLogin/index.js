import React from "react";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import ButtonCollab from "../../components/ButtonCollab";
import ActionCollab from "../../components/ActionCollab";

import FormAuth from "../../containers/FormAuth";

import useValidation from "../../libs/validation/useValidation";
import validation from "./validation";

function FormLogin() {
  const { value, handleChange, handleSubmit, errors } = useValidation(
    validation,
    signIn,
    "email",
    "password"
  );

  function signIn() {}

  return (
    <FormAuth noValidate onSubmit={handleSubmit}>
      <TitleCollab content="Login" />

      <FieldCollab
        id="email"
        htmlFor="email"
        name="email"
        content="E-mail:"
        value={value.email}
        onChange={handleChange}
        msgError={errors.email}
      />

      <FieldCollab
        id="password"
        htmlFor="password"
        type="password"
        name="password"
        content="Senha:"
        value={value.password}
        onChange={handleChange}
        msgError={errors.password}
      />

      <ButtonCollab content="Entrar" as="button" />
      <ActionCollab content="Esqueci a senha" to="/auth/forgot" />
      <ActionCollab content="Criar conta" to="/auth/signup" />
    </FormAuth>
  );
}

export default FormLogin;
