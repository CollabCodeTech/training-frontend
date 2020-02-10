import styled from "styled-components";

import { _h6 } from "../../styles/tools/Typography";

export const Input = styled.input`
  --widthIcon: 24px;
  ${_h6};
  box-sizing: border-box;
  color: var(--color-platinum);
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--color-floral-white);
  padding: var(--gap-smaller) calc(var(--widthIcon) + var(--gap-smaller) * 2)
    var(--gap-smaller) 0;

  &:hover,
  &:focus {
    border-bottom-color: var(--color-peach);
    border-bottom-witth: 2px;
  }
`;
