import styled from "styled-components";

import { Logo } from "../../components/LogoCollab/styles.js";

export const Header = styled.header`
  margin-bottom: var(--gap-big);
  text-align: center;

  ${Logo} {
    height: 120px;
  }

  @media (min-width: 1596px) and (min-height: 900px) {
    position: relative;
    width: 40%;
    height: 100%;
    background-color: var(--color-floral-white);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 110%;
      width: 30%;
      background-color: var(--color-floral-white);
      z-index: 0;
      transform: translateX(50%) rotate(10deg) translateY(-5%);
    }

    ${Logo} {
      height: 80%;
      position: absolute;
      z-index: 1;
      padding: 0;
      margin: 0;
      transform: translateX(-25%);
    }
  }
`;
