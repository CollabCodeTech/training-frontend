import React from "react";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import ButtonCollab from "../../components/ButtonCollab";
import ActionCollab from "../../components/ActionCollab";

import { Form } from "./styles";

function FormLogin() {
  return (
    <Form>
      <TitleCollab content="Login" />

      <FieldCollab content="E-mail:" htmlFor="email" id="email" />
      <FieldCollab
        content="Senha:"
        htmlFor="password"
        id="password"
        type="password"
      />

      <ButtonCollab>Entrar</ButtonCollab>

      <ActionCollab>Resetar senha</ActionCollab>
      <ActionCollab>Criar conta</ActionCollab>
    </Form>
  );
}

export default FormLogin;
