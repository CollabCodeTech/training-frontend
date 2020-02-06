import { createGlobalStyle } from "styled-components";

const Gaps = createGlobalStyle`
  :root {
    --gap-smaller: 5px;
    --gap-small: 15px;
    --gap-medium: 20px;
    --gap-big: 40px;
    --gap-bigger: 50px;
  }
`;

export default Gaps;
