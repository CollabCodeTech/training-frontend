import styled from "styled-components";
import { _caption } from "../../styles/tools/Typography";

export const Content = styled.span`
  display: block;
  margin-bottom: var(--gap-smaller);
`;

export const Icon = styled.img`
  position: absolute;
  bottom: var(--gap-smaller);
  right: var(--gap-smaller);
  overflow: hidden;
  width: 30px;
  transition: transform 100ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Error = styled.span`
  ${_caption};
  color: var(--color-sandstorm);
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
`;
