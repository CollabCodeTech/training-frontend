import React from "react";
import iconVisibilityOff from "../../icons/actions/visibility_off.svg";
import iconVisibility from "../../icons/actions/visibility.svg";
import LabelCollab from "../LabelCollab";
import InputCollab from "../InputCollab";
import useFieldCollab from "./useFieldCollab";
import { Content, Icon, Error } from "./styles";

const FieldCollab = ({
  content,
  id,
  name,
  value,
  htmlFor,
  type = "text",
  msgError,
  onChange
}) => {
  const { show, showPassword } = useFieldCollab();

  function showIconVisibility(type) {
    if (type === "password") {
      return (
        <Icon
          src={!show ? iconVisibilityOff : iconVisibility}
          onClick={showPassword}
        />
      );
    }
  }

  function showError(msgError) {
    return msgError && <Error>{msgError}</Error>;
  }

  function defineType(type) {
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
        type={defineType(type)}
        value={value}
        onChange={onChange}
      />
      {showIconVisibility(type)}
      {showError(msgError)}
    </LabelCollab>
  );
};

export default FieldCollab;
