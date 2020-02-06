import React from "react";

import { Label } from "./styles";

function LabelCollab({ htmlFor, children, content, type }) {
  return (
    <Label htmlFor={htmlFor} type={type}>
      {children || content}
    </Label>
  );
}

export default LabelCollab;
