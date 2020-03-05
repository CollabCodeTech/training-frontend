import React, {useState} from "react";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import SubmitCollab from "../../components/SubmitCollab";

import FormAuth from "../../containers/FormAuth";
import LabelCollab from "../../components/LabelCollab";

import AuthService from "../../services/AuthService";
import MessageCollab from "../../components/MessageCollab";

function FormForgot() {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  function onChange(e) {
    setEmail(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()

    return AuthService.forgot(email).then(() => setSuccess(true)).then(() => setEmail(""));
  }


  return (
    <FormAuth onSubmit={onSubmit}>
      <TitleCollab content="Esqueci minha senha" />

      <LabelCollab
        content="Informe seu e-mail para alterar a sua senha"
        warning={true}
      />

      <FieldCollab content="E-mail:" htmlFor="email" id="email" name="email" onChange={onChange} value={email} />

      <SubmitCollab content="Enviar" />
      { success && <MessageCollab id="success" content="Por favor, verifique seu e-mail." /> }
    </FormAuth>
  );
}

export default FormForgot;
