import React from "react";

import { Logo } from "./styles";

import ball from "../../img/ball.svg";
import ballText from "../../img/ball_text.svg";
import ballTextLight from "../../img/ball_text_light.svg";
import horizontal from "../../img/horizontal.svg";
import horizontalLight from "../../img/horizontal_light.svg";

const LogoCollab = function({ type = "horizontal" }) {
  const types = { ball, ballText, ballTextLight, horizontal, horizontalLight };

  return <Logo src={types[type]} />;
};

export default LogoCollab;
