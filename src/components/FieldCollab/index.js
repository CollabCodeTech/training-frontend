import React, { useState } from "react";

import iconVisibilityOff from "../../icons/actions/visibility_off.svg";
import iconVisibility from "../../icons/actions/visibility.svg";

import LabelCollab from "../LabelCollab";
import InputCollab from "../InputCollab";
import { Content, Icon, Error } from "./styles";

function FieldCollab({
  content,
  id,
  name,
  value,
  htmlFor,
  type = "text",
  msgError,
  onChange
}) {
  const [show, setShow] = useState(false);

  function showPassword() {
    setShow(old => !old);
  }

  function showIconVisibility() {
    if (type === "password") {
      return (
        <Icon
          src={!show ? iconVisibilityOff : iconVisibility}
          onClick={showPassword}
        />
      );
    }
  }

  function showError() {
    return msgError && <Error>{msgError}</Error>;
  }

  function defineType() {
    if (type === "password" && !show) {
      return "password";
    } else if (type === "password" && show) {
      return "text";
    }
    return type;
  }

  return (
    <LabelCollab htmlFor={htmlFor} type={type}>
      <Content>{content}</Content>
      <InputCollab
        id={id}
        name={name}
        type={defineType()}
        value={value}
        onChange={onChange}
      />
      {showIconVisibility()}
      {showError()}
    </LabelCollab>
  );
}

export default FieldCollab;
