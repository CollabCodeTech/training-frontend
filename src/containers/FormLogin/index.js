import React from "react";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import ButtonCollab from "../../components/ButtonCollab";
import ActionCollab from "../../components/ActionCollab";

import FormAuth from "../../containers/FormAuth";

function FormLogin() {
  return (
    <FormAuth>
      <TitleCollab content="Login" />

      <FieldCollab content="E-mail:" htmlFor="email" id="email" />
      <FieldCollab
        content="Senha:"
        htmlFor="password"
        id="password"
        type="password"
        msgError="Senha com 8 digitos"
      />

      <ButtonCollab content="Entrar" to="/dashboard" />
      <ActionCollab content="Esqueci a senha" to="/auth/forgot" />
      <ActionCollab content="Criar conta" to="/auth/signup" />
    </FormAuth>
  );
}

export default FormLogin;
