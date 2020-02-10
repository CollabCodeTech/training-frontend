import styled from "styled-components";

export const Content = styled.div`
  width: 400px;

  @media (min-height: 570px) {
    height: auto;
  }

  @media (min-width: 1596px) and (min-height: 900px) {
    display: flex;
    width: 1596px;
    height: 900px;
    overflow: hidden;
    background-color: var(--color-arsenic);
  }

  @media (min-width: 1920px) and (min-height: 1080px) {
    width: 75%;
    height: 80%;
  }
`;
