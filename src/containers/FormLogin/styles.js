import styled from "styled-components";

import { _shadowBottom } from "../../styles/tools/Shadow";
import { Title } from "../../components/TitleCollab/styles";
import { Label } from "../../components/LabelCollab/styles";
import { Button } from "../../components/ButtonCollab/styles";
import { Action } from "../../components/ActionCollab/styles";

export const Form = styled.form`
  padding-left: var(--gap-small);
  padding-right: var(--gap-small);

  & > ${Title} {
    text-align: center;
    margin-bottom: var(--gap-big);
  }

  & > ${Label}:not(:last-of-type) {
    display: block;
    margin-bottom: var(--gap-big);
  }

  & > ${Button} {
    ${_shadowBottom};
    width: 100%;
    height: 42px;
    margin-top: var(--gap-bigger);
  }

  & > ${Action} {
    display: block;
    text-align: center;
    margin-top: var(--gap-small);

    &:active {
      box-sizing: none;
    }
  }
`;
