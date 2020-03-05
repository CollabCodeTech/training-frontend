import styled from "styled-components";

import { _h6 } from "../../styles/tools/Typography";

export const Message = styled.span`
  ${_h6};
  display: flex;
  flex: 1;
  height: 50px;
  background: #75daad;
  color: white;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  border-radius: var(--radius-big);
`
