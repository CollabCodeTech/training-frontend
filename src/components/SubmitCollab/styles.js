import styled from "styled-components";

import { _h6 } from "../../styles/tools/Typography";

export const Button = styled.button`
  ${_h6};
  box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
  width: 100%;
  height: 42px;
  margin-top: var(--gap-bigger);
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
