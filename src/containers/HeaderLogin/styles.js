import styled from "styled-components";

import { Logo } from "../../components/LogoCollab/styles.js";

export const Header = styled.header`
  padding-top: var(--gap-medium);
  margin-bottom: var(--gap-medium);
  text-align: center;

  ${Logo} {
    height: 70px;
  }
`;
