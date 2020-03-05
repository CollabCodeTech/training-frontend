import React from "react";
import { Button, Content } from "./styles";

function ButtonCollab(props) {
  return (
    <Button {...props}>
      <Content>{props.content}</Content>
    </Button>
  );
}

export default ButtonCollab;
