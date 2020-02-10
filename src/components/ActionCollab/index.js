import React from "react";

import { Action } from "./styles";

function ActionCollab(props) {
  return <Action {...props}>{props.content}</Action>;
}

export default ActionCollab;
