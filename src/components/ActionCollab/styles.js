import styled from "styled-components";

import { Link } from "react-router-dom";
import { _body1 } from "../../styles/tools/Typography";

export const Action = styled(Link)`
  ${_body1};
  text-decoration: none;
  color: var(--color-floral-white);

  &:hover,
  &:focus {
    color: var(--color-peach);
  }
`;
