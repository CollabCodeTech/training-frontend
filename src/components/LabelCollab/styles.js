import styled from "styled-components";

import { _h6 } from "../../styles/tools/Typography";

export const Label = styled.label`
  ${_h6};
  color: var(--color-floral-white);
  position: relative;
  display: block;

  &:hover {
    color: var(--color-peach);
  }
`;
