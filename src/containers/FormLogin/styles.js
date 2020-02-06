import styled from "styled-components";

import { _shadowBottom } from "../../styles/tools/Shadow";
import { Title } from "../../components/TitleCollab/styles";
import { Label } from "../../components/LabelCollab/styles";
import { Button } from "../../components/ButtonCollab/styles";
import { Action } from "../../components/ActionCollab/styles";
import { _h4 } from "../../styles/tools/Typography";

export const Form = styled.form`
  padding-left: var(--gap-small);
  padding-right: var(--gap-small);

  & > ${Title} {
    text-align: center;
    margin-bottom: var(--gap-bigger);
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

  @media (min-width: 1596px) and (min-height: 900px) {
    box-sizing: border-box;
    width: 60%;
    padding-left: 18%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > ${Title} {
      ${_h4};
      margin-bottom: calc(var(--gap-bigger) * 2);
    }

    & > ${Label}:not(:last-of-type) {
      margin-bottom: var(--gap-bigger);
    }

    & > ${Button} {
      height: 50px;
      margin-top: calc(var(--gap-bigger) + var(--gap-medium));
    }
  }
`;
