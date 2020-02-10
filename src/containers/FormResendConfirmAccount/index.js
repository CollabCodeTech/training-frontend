import React from "react";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import ButtonCollab from "../../components/ButtonCollab";

import FormAuth from "../FormAuth";
import LabelCollab from "../../components/LabelCollab";

function FormResendConfirmAccount() {
  return (
    <FormAuth>
      <TitleCollab content="Confirmar conta" />

      <LabelCollab
        content="Informe seu email para te enviar uma mensagem com o link de confirmação da sua conta"
        warning={true}
      />

      <FieldCollab content="E-mail:" htmlFor="email" id="email" />

      <ButtonCollab content="Enviar" to="/dashboard" />
    </FormAuth>
  );
}

export default FormResendConfirmAccount;
