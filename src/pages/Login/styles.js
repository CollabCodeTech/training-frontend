import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--gap-medium);
  padding-bottom: var(--gap-medium);

  @media (min-height: 570px) {
    height: 100vh;
  }
`;

export const Content = styled.div`
  @media (min-width: 450px) {
    width: 450px;
  }

  @media (min-height: 568px) {
    height: 568px;
  }

  @media (min-width: 1596px) and (min-height: 900px) {
    display: flex;
    width: 1596px;
    height: 900px;
    overflow: hidden;
    background-color: var(--color-arsenic);
  }
`;
