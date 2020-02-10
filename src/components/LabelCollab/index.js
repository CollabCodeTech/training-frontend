import React from "react";

import { Label } from "./styles";

function LabelCollab({ htmlFor, children, content, warning = false }) {
  return (
    <Label htmlFor={htmlFor} warning={warning}>
      {children || content}
    </Label>
  );
}

export default LabelCollab;
