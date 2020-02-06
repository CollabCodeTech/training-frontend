import React from "react";
import { Button, Content } from "./styles";

function ButtonCollab(props) {
  return (
    <Button>
      <Content>{props.children}</Content>
    </Button>
  );
}

export default ButtonCollab;
