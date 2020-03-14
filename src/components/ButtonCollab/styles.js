import styled from "styled-components";
import { Link } from "react-router-dom";

import { _h6 } from "../../styles/tools/Typography";

export const Button = styled(Link).attrs({ as: "button" })`
  ${_h6};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  border: none;
  border-radius: var(--radius-big);
  background-color: var(--color-fiery-rose);
  color: var(--color-floral-white);
  opacity: 0.9;
  transition: opacity 100ms linear, transform 50ms linear;
  z-index: 1;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const Content = styled.span``;
