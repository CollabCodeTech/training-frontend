import React from "react";

import { Message } from "./styles";

function MessageCollab(props) {
  return <Message {...props}>{props.content}</Message>;
}

export default MessageCollab;
