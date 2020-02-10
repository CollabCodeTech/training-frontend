import React from "react";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import ButtonCollab from "../../components/ButtonCollab";

import FormAuth from "../../containers/FormAuth";
import LabelCollab from "../../components/LabelCollab";

function FormForgot() {
  return (
    <FormAuth>
      <TitleCollab content="Esqueci minha senha" />

      <LabelCollab
        content="Informe seu e-mail para alterar a sua senha"
        warning={true}
      />

      <FieldCollab content="E-mail:" htmlFor="email" id="email" />

      <ButtonCollab content="Enviar" to="/dashboard" />
    </FormAuth>
  );
}

export default FormForgot;
