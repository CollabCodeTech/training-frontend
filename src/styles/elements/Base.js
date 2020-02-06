import { createGlobalStyle } from "styled-components";

import { _gradientBg } from "../tools/Gradients";

const Base = createGlobalStyle`
  body {
    ${_gradientBg}
    height: 100vh;
    font-family: 'Comfortaa', sans-serif;
  }
`;

export default Base;
