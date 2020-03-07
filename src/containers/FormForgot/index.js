import React from "react";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import ButtonCollab from "../../components/ButtonCollab";

import FormAuth from "../../containers/FormAuth";
import LabelCollab from "../../components/LabelCollab";

import useValidation from "../../libs/validation/useValidation";
import validation from "./validation";

function FormForgot() {
  const { value, handleChange, handleSubmit, errors } = useValidation(
    validation,
    sendFormForgot,
    "email"
  );

  function sendFormForgot() {}

  return (
    <FormAuth noValidate onSubmit={handleSubmit}>
      <TitleCollab content="Esqueci minha senha" />

      <LabelCollab
        content="Informe seu e-mail para alterar a sua senha"
        warning={true}
      />

      <FieldCollab
        content="E-mail:"
        htmlFor="email"
        id="email"
        name="email"
        value={value.email}
        msgError={errors.email}
        onChange={handleChange}
      />

      <ButtonCollab content="Enviar" to="/dashboard" as="button" />
    </FormAuth>
  );
}

export default FormForgot;
